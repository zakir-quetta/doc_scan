// ==================== Utilities ====================
function uuid() {
  return crypto.randomUUID ? crypto.randomUUID() :
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}
function loadImageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// ==================== IndexedDB ====================
const DB_NAME = 'docscanner';
const STORE = 'docs';
let db;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE, { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
function saveDoc(doc) {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(doc);
    tx.oncomplete = res;
    tx.onerror = () => rej(tx.error);
  });
}
function getDoc(id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(id);
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
function getAllDocs() {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
function deleteDoc(id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = res;
    tx.onerror = () => rej(tx.error);
  });
}

// ==================== State ====================
const state = {
  currentDoc: null,
  currentPageIndex: -1,
  currentImage: null,
  currentMode: 'color',
};
let viewingDocId = null;

// ==================== Navigation ====================
const screens = {
  home: document.getElementById('homeScreen'),
  editor: document.getElementById('editorScreen'),
  doc: document.getElementById('docScreen'),
};
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// ==================== Home ====================
async function renderHome() {
  const docs = await getAllDocs();
  docs.sort((a, b) => b.updatedAt - a.updatedAt);
  const list = document.getElementById('docsList');
  const empty = document.getElementById('emptyState');

  if (docs.length === 0) {
    empty.style.display = '';
    list.innerHTML = '';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = docs.map(d => `
    <li class="doc-card" data-id="${d.id}">
      <img class="doc-card-thumb" src="${d.pages[0]?.dataUrl || ''}" alt="">
      <div class="doc-card-info">
        <div class="doc-card-name">${escapeHtml(d.name)}</div>
        <div class="doc-card-meta">${d.pages.length} page${d.pages.length > 1 ? 's' : ''}</div>
      </div>
    </li>
  `).join('');
  list.querySelectorAll('.doc-card').forEach(c => {
    c.onclick = () => openDoc(c.dataset.id);
  });
}
function goHome() {
  viewingDocId = null;
  showScreen('home');
  renderHome();
}

// ==================== Capture ====================
function newDoc() {
  return {
    id: uuid(),
    name: 'Scan ' + new Date().toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    pages: [],
  };
}
document.getElementById('scanBtn').onclick = () => {
  state.currentDoc = newDoc();
  state.currentPageIndex = -1;
  document.getElementById('cameraInput').click();
};
document.getElementById('pickBtn').onclick = () => {
  state.currentDoc = newDoc();
  state.currentPageIndex = -1;
  document.getElementById('galleryInput').click();
};
document.getElementById('cameraInput').onchange = handleFile;
document.getElementById('galleryInput').onchange = handleFile;

async function handleFile(e) {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) { state.currentDoc = null; return; }
  const img = await loadImage(file);
  state.currentImage = img;
  state.currentMode = 'color';
  await showEditor();
}

// ==================== Editor ====================
const editorCanvas = document.getElementById('editorCanvas');
const ectx = editorCanvas.getContext('2d');

async function showEditor() {
  const img = state.currentImage;
  if (!img) return;
  const maxDim = 1400;
  const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
  editorCanvas.width = Math.round(img.width * scale);
  editorCanvas.height = Math.round(img.height * scale);
  document.querySelectorAll('.mode-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.mode === state.currentMode);
  });
  showScreen('editor');
  renderEditor();
}

function renderEditor() {
  const img = state.currentImage;
  if (!img) return;
  const w = editorCanvas.width, h = editorCanvas.height;
  ectx.drawImage(img, 0, 0, w, h);
  if (state.currentMode === 'original') return;

  try {
    if (!window.cv || !cv.imread) return;
    let src = cv.imread(editorCanvas);
    let out = new cv.Mat();

    if (state.currentMode === 'gray') {
      cv.cvtColor(src, out, cv.COLOR_RGBA2GRAY);
    } else if (state.currentMode === 'bw') {
      let gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      cv.adaptiveThreshold(gray, out, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 15, 10);
      gray.delete();
    } else if (state.currentMode === 'color') {
      src.convertTo(out, -1, 1.15, -10);
    }

    if (out.channels() === 1) {
      let rgba = new cv.Mat();
      cv.cvtColor(out, rgba, cv.COLOR_GRAY2RGBA);
      cv.imshow(editorCanvas, rgba);
      rgba.delete();
    } else {
      cv.imshow(editorCanvas, out);
    }
    src.delete();
    out.delete();
  } catch (err) {
    console.warn('OpenCV render error:', err);
  }
}

document.querySelectorAll('.mode-tab').forEach(tab => {
  tab.onclick = () => {
    state.currentMode = tab.dataset.mode;
    document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderEditor();
  };
});

document.getElementById('rotateBtn').onclick = () => {
  const img = state.currentImage;
  if (!img) return;
  const c = document.createElement('canvas');
  c.width = img.height;
  c.height = img.width;
  const x = c.getContext('2d');
  x.translate(c.width / 2, c.height / 2);
  x.rotate(Math.PI / 2);
  x.drawImage(img, -img.width / 2, -img.height / 2);
  const newImg = new Image();
  newImg.onload = () => { state.currentImage = newImg; showEditor(); };
  newImg.src = c.toDataURL('image/jpeg', 0.95);
};

document.getElementById('editorBack').onclick = () => {
  if (confirm('Discard this scan?')) {
    state.currentImage = null;
    state.currentDoc = null;
    goHome();
  }
};

document.getElementById('editorSave').onclick = async () => {
  if (!state.currentDoc) return;
  const dataUrl = editorCanvas.toDataURL('image/jpeg', 0.9);
  const page = { id: uuid(), dataUrl };

  if (state.currentPageIndex >= 0) {
    state.currentDoc.pages[state.currentPageIndex] = page;
  } else {
    state.currentDoc.pages.push(page);
  }
  state.currentDoc.updatedAt = Date.now();
  await saveDoc(state.currentDoc);

  const docId = state.currentDoc.id;
  state.currentImage = null;
  state.currentDoc = null;
  state.currentPageIndex = -1;
  await renderHome();
  openDoc(docId);
};

// ==================== Document View ====================
async function openDoc(id) {
  const doc = await getDoc(id);
  if (!doc) return;
  viewingDocId = id;
  document.getElementById('docTitle').textContent = doc.name;
  const list = document.getElementById('pagesList');
  list.innerHTML = doc.pages.map((p, i) => `
    <img class="page-thumb" src="${p.dataUrl}" alt="Page ${i + 1}">
  `).join('');
  showScreen('doc');
}

document.getElementById('docBack').onclick = () => goHome();

document.getElementById('addPageBtn').onclick = async () => {
  const doc = await getDoc(viewingDocId);
  if (!doc) return;
  state.currentDoc = doc;
  state.currentPageIndex = -1;
  document.getElementById('cameraInput').click();
};

document.getElementById('docMenu').onclick = async () => {
  if (confirm('Delete this document?')) {
    await deleteDoc(viewingDocId);
    goHome();
  }
};

document.getElementById('exportPdfBtn').onclick = async () => {
  const doc = await getDoc(viewingDocId);
  if (!doc || doc.pages.length === 0) return;

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageW = 210, pageH = 297;

  for (let i = 0; i < doc.pages.length; i++) {
    if (i > 0) pdf.addPage();
    const img = await loadImageFromUrl(doc.pages[i].dataUrl);
    const ratio = Math.min(pageW / img.width, pageH / img.height);
    const w = img.width * ratio;
    const h = img.height * ratio;
    pdf.addImage(doc.pages[i].dataUrl, 'JPEG', (pageW - w) / 2, (pageH - h) / 2, w, h);
  }
  pdf.save(doc.name + '.pdf');
};

// ==================== Install Prompt ====================
let deferredPrompt;
const installBar = document.getElementById('installBar');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBar.classList.remove('hidden');
});

document.getElementById('installBtn').onclick = async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBar.classList.add('hidden');
};
document.getElementById('installClose').onclick = () => installBar.classList.add('hidden');
window.addEventListener('appinstalled', () => installBar.classList.add('hidden'));

// ==================== Theme ====================
const themeBtn = document.getElementById('themeBtn');
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem('theme', t);
  themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
}
applyTheme(localStorage.getItem('theme') || 'light');
themeBtn.onclick = () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
};

// ==================== Init ====================
(async () => {
  db = await openDB();
  await renderHome();
  showScreen('home');
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
})();
