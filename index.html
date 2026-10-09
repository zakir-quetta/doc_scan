<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2563eb">
<link rel="manifest" href="manifest.json">
<link rel="icon" href="icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>Doc Scanner</title>
<style>
:root{--bg:#f4f5f7;--surface:#fff;--text:#0f172a;--muted:#64748b;--border:#e2e8f0;--accent:#2563eb;--accent-hover:#1d4ed8;--danger:#dc2626;--shadow:0 1px 3px rgba(0,0,0,.06);--shadow-lg:0 10px 25px rgba(0,0,0,.08);--radius:14px}
[data-theme=dark]{--bg:#0f172a;--surface:#1e293b;--text:#f1f5f9;--muted:#94a3b8;--border:#334155;--accent:#3b82f6;--accent-hover:#2563eb;--shadow:0 1px 3px rgba(0,0,0,.4);--shadow-lg:0 10px 25px rgba(0,0,0,.5)}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
body{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}
.screen{display:none;flex-direction:column;min-height:100vh;min-height:100dvh}
.screen.active{display:flex}
.topbar{display:flex;align-items:center;justify-content:space-between;padding:12px 8px 12px 12px;gap:6px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}
.topbar h1{font-size:17px;font-weight:600;flex:1;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.topbar .logo{font-size:19px;font-weight:700;letter-spacing:-.02em;text-align:left;padding-left:6px}
.icon-btn{background:transparent;border:0;color:var(--text);width:42px;height:42px;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s}
.icon-btn:hover{background:var(--bg)}
.icon-btn svg{width:22px;height:22px}
.btn-primary,.btn-secondary,.btn-text{border:0;cursor:pointer;font-size:15px;font-weight:600;border-radius:12px;padding:12px 18px;transition:all .15s;font-family:inherit}
.btn-primary{background:var(--accent);color:#fff}
.btn-primary:hover{background:var(--accent-hover)}
.btn-secondary{background:var(--surface);color:var(--text);border:1px solid var(--border)}
.btn-text{background:transparent;color:var(--accent);padding:8px 12px}
.wide{width:100%}
.home-content{flex:1;overflow-y:auto;padding-bottom:130px}
.section-label{font-size:12px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;padding:16px 20px 8px}
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px 40px;text-align:center;color:var(--muted)}
.empty-art{font-size:56px;margin-bottom:14px;opacity:.4}
.empty h2{font-size:17px;color:var(--text);margin-bottom:6px;font-weight:600}
.empty p{font-size:14px}

.folders-list{list-style:none;padding:0 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}
.folder-card{background:var(--surface);border-radius:12px;padding:14px 12px;box-shadow:var(--shadow);cursor:pointer;transition:transform .15s;text-align:center;user-select:none}
.folder-card:active{transform:scale(.96)}
.folder-icon{width:36px;height:36px;margin:0 auto 8px;color:var(--accent);display:flex;align-items:center;justify-content:center}
.folder-icon svg{width:32px;height:32px}
.folder-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.folder-count{font-size:11px;color:var(--muted);margin-top:2px}

.docs-list{list-style:none;padding:0 16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}
.doc-card{background:var(--surface);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);cursor:pointer;transition:transform .15s;user-select:none}
.doc-card:active{transform:scale(.97)}
.doc-card-thumb{width:100%;aspect-ratio:3/4;object-fit:cover;background:var(--bg);display:block}
.doc-card-info{padding:10px 12px}
.doc-card-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.doc-card-meta{font-size:11px;color:var(--muted);margin-top:2px}

.fab-row{position:fixed;left:0;right:0;bottom:0;padding:16px 16px calc(16px + env(safe-area-inset-bottom));display:flex;gap:12px;justify-content:center;align-items:center;background:linear-gradient(to top,var(--bg) 55%,transparent);pointer-events:none;z-index:20}
.fab-row>*{pointer-events:auto}
.fab{background:var(--accent);color:#fff;border:0;border-radius:999px;padding:15px 26px;font-size:16px;font-weight:600;display:flex;align-items:center;gap:10px;box-shadow:0 8px 20px rgba(37,99,235,.35);cursor:pointer;transition:transform .15s;font-family:inherit}
.fab svg{width:22px;height:22px}
.fab:active{transform:scale(.96)}
.fab-secondary{width:56px;height:56px;border-radius:50%;background:var(--surface);color:var(--text);border:1px solid var(--border);cursor:pointer;box-shadow:var(--shadow-lg);display:flex;align-items:center;justify-content:center}
.fab-secondary svg{width:24px;height:24px}

.editor-canvas-wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto}
#editorCanvas{max-width:100%;max-height:100%;border-radius:8px;box-shadow:var(--shadow-lg)}
.editor-controls{background:var(--surface);border-top:1px solid var(--border);padding:14px 16px calc(14px + env(safe-area-inset-bottom))}
.mode-tabs{display:flex;gap:4px;background:var(--bg);border-radius:12px;padding:4px;margin-bottom:10px}
.mode-tab{flex:1;border:0;background:transparent;color:var(--muted);padding:9px 4px;font-size:13px;font-weight:600;border-radius:9px;cursor:pointer;transition:all .15s;font-family:inherit}
.mode-tab.active{background:var(--surface);color:var(--text);box-shadow:var(--shadow)}

.pages-list{flex:1;padding:16px 16px 130px;display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;overflow-y:auto}
.page-thumb{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:10px;box-shadow:var(--shadow);background:var(--surface)}
.doc-actions{position:fixed;left:0;right:0;bottom:0;padding:16px 16px calc(16px + env(safe-area-inset-bottom));background:linear-gradient(to top,var(--bg) 55%,transparent);display:flex;gap:10px;z-index:20}
.doc-actions button{flex:1}

.install-bar{position:fixed;top:calc(12px + env(safe-area-inset-top));left:12px;right:12px;background:var(--surface);border-radius:var(--radius);padding:12px 14px;display:flex;align-items:center;gap:10px;box-shadow:var(--shadow-lg);z-index:100;animation:slideDown .3s ease}
@keyframes slideDown{from{transform:translateY(-140%);opacity:0}to{transform:translateY(0);opacity:1}}
.install-bar.hidden{display:none}
.install-bar-text{flex:1;display:flex;flex-direction:column}
.install-bar-text strong{font-size:14px}
.install-bar-text span{font-size:12px;color:var(--muted)}

.crop-stage{flex:1;display:flex;align-items:center;justify-content:center;padding:12px;background:#0a0a0a;overflow:hidden;min-height:0}
#cropCanvas{max-width:100%;max-height:100%;touch-action:none;display:block;border-radius:6px;box-shadow:0 8px 30px rgba(0,0,0,.6);cursor:crosshair}
.crop-hint{padding:12px 16px;text-align:center;font-size:13px;color:var(--muted);background:var(--surface);border-top:1px solid var(--border)}
.crop-controls{padding:12px 16px calc(14px + env(safe-area-inset-bottom));background:var(--surface);display:flex;gap:10px}
.crop-controls button{flex:1}
</style>
</head>
<body>

<div id="installBar" class="install-bar hidden">
  <div class="install-bar-text">
    <strong>Install Doc Scanner</strong>
    <span>Faster access · works offline</span>
  </div>
  <button id="installBtn" class="btn-primary">Install</button>
  <button id="installClose" class="icon-btn" aria-label="Dismiss">✕</button>
</div>

<section id="homeScreen" class="screen active">
  <header class="topbar">
    <button class="icon-btn" id="homeBack" style="display:none" aria-label="Back"></button>
    <h1 class="logo" id="homeTitle">Doc Scanner</h1>
    <button class="icon-btn" id="newFolderBtn" aria-label="New folder"></button>
    <button class="icon-btn" id="deleteFolderBtn" style="display:none" aria-label="Delete folder"></button>
    <button class="icon-btn" id="themeBtn" aria-label="Theme"></button>
  </header>
  <div class="home-content">
    <div id="foldersSection" style="display:none">
      <div class="section-label">Folders</div>
      <ul id="foldersList" class="folders-list"></ul>
    </div>
    <div id="docsSection">
      <div class="section-label" id="docsLabel" style="display:none">Documents</div>
      <div id="emptyState" class="empty">
        <div class="empty-art">📄</div>
        <h2>No documents yet</h2>
        <p>Tap Scan to capture your first document</p>
      </div>
      <ul id="docsList" class="docs-list"></ul>
    </div>
  </div>
  <div class="fab-row">
    <button id="pickBtn" class="fab-secondary" aria-label="From gallery"></button>
    <button id="scanBtn" class="fab"></button>
  </div>
</section>

<section id="cropScreen" class="screen">
  <header class="topbar">
    <button class="icon-btn" id="cropBack" aria-label="Back"></button>
    <h1>Crop</h1>
    <button id="cropApply" class="btn-text">Next</button>
  </header>
  <div class="crop-stage"><canvas id="cropCanvas"></canvas></div>
  <div class="crop-hint">Drag corners or edges to fit the document</div>
  <div class="crop-controls">
    <button id="cropAuto" class="btn-secondary">Auto-detect</button>
    <button id="cropReset" class="btn-secondary">Reset</button>
  </div>
</section>

<section id="editorScreen" class="screen">
  <header class="topbar">
    <button class="icon-btn" id="editorBack" aria-label="Back"></button>
    <h1>Enhance</h1>
    <button id="editorSave" class="btn-text">Save</button>
  </header>
  <div class="editor-canvas-wrap"><canvas id="editorCanvas"></canvas></div>
  <div class="editor-controls">
    <div class="mode-tabs">
      <button data-mode="original" class="mode-tab">Original</button>
      <button data-mode="color" class="mode-tab active">Color</button>
      <button data-mode="gray" class="mode-tab">Grayscale</button>
      <button data-mode="bw" class="mode-tab">B&amp;W</button>
    </div>
    <button id="rotateBtn" class="btn-secondary wide">Rotate 90°</button>
  </div>
</section>

<section id="docScreen" class="screen">
  <header class="topbar">
    <button class="icon-btn" id="docBack" aria-label="Back"></button>
    <h1 id="docTitle">Document</h1>
    <button class="icon-btn" id="docMenu" aria-label="Delete"></button>
  </header>
  <div id="pagesList" class="pages-list"></div>
  <div class="doc-actions">
    <button id="addPageBtn" class="btn-secondary">+ Add page</button>
    <button id="exportPdfBtn" class="btn-primary">Export PDF</button>
  </div>
</section>

<input type="file" id="cameraInput" accept="image/*" capture="environment" hidden>
<input type="file" id="galleryInput" accept="image/*" hidden>

<script src="https://docs.opencv.org/4.x/opencv.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
// ==================== Icons ====================
const ICONS = {
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  gallery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  folderPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
};
document.getElementById('pickBtn').innerHTML = ICONS.gallery;
document.getElementById('scanBtn').innerHTML = ICONS.camera + '<span>Scan</span>';
document.getElementById('newFolderBtn').innerHTML = ICONS.folderPlus;
document.getElementById('deleteFolderBtn').innerHTML = ICONS.trash;
document.getElementById('homeBack').innerHTML = ICONS.back;
document.getElementById('cropBack').innerHTML = ICONS.back;
document.getElementById('editorBack').innerHTML = ICONS.back;
document.getElementById('docBack').innerHTML = ICONS.back;
document.getElementById('docMenu').innerHTML = ICONS.trash;
document.getElementById('rotateBtn').innerHTML = ICONS.rotate + ' Rotate 90°';

// ==================== Utilities ====================
function uuid(){return crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&0x3|0x8)).toString(16)})}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function loadImage(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=u})}
function loadImageFromUrl(url){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url})}

function addLongPress(el, onLong, onShort) {
  let timer = null, fired = false;
  el.addEventListener('pointerdown', () => {
    fired = false;
    timer = setTimeout(() => { fired = true; onLong(); }, 600);
  });
  const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
  el.addEventListener('pointerup', cancel);
  el.addEventListener('pointerleave', cancel);
  el.addEventListener('pointercancel', cancel);
  el.addEventListener('contextmenu', e => e.preventDefault());
  el.addEventListener('click', e => {
    if (fired) { e.preventDefault(); e.stopPropagation(); return; }
    if (onShort) onShort();
  });
}

// ==================== Folders ====================
function getFolders(){try{return JSON.parse(localStorage.getItem('folders')||'[]')}catch{return[]}}
function saveFolders(f){localStorage.setItem('folders',JSON.stringify(f))}

// ==================== IndexedDB ====================
const DB_NAME='docscanner',STORE='docs';let db;
function openDB(){return new Promise((res,rej)=>{const r=indexedDB.open(DB_NAME,1);r.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains(STORE))d.createObjectStore(STORE,{keyPath:'id'})};r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
function saveDoc(doc){return new Promise((res,rej)=>{const t=db.transaction(STORE,'readwrite');t.objectStore(STORE).put(doc);t.oncomplete=res;t.onerror=()=>rej(t.error)})}
function getDoc(id){return new Promise((res,rej)=>{const t=db.transaction(STORE,'readonly');const r=t.objectStore(STORE).get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
function getAllDocs(){return new Promise((res,rej)=>{const t=db.transaction(STORE,'readonly');const r=t.objectStore(STORE).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
function deleteDoc(id){return new Promise((res,rej)=>{const t=db.transaction(STORE,'readwrite');t.objectStore(STORE).delete(id);t.oncomplete=res;t.onerror=()=>rej(t.error)})}

// ==================== State ====================
const state={currentDoc:null,currentPageIndex:-1,currentImage:null,currentMode:'color',currentFolder:null};
let viewingDocId=null;

// ==================== Navigation ====================
const screens={home:document.getElementById('homeScreen'),crop:document.getElementById('cropScreen'),editor:document.getElementById('editorScreen'),doc:document.getElementById('docScreen')};
function showScreen(n){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[n].classList.add('active');window.scrollTo(0,0)}

// ==================== Home ====================
async function renderHome(){
  const allDocs = await getAllDocs();
  const folders = getFolders();
  const inFolder = state.currentFolder;
  const currentFolder = inFolder ? folders.find(f => f.id === inFolder) : null;

  // Header
  document.getElementById('homeTitle').textContent = currentFolder ? currentFolder.name : 'Doc Scanner';
  document.getElementById('homeTitle').classList.toggle('logo', !currentFolder);
  document.getElementById('homeBack').style.display = inFolder ? '' : 'none';
  document.getElementById('newFolderBtn').style.display = inFolder ? 'none' : '';
  document.getElementById('deleteFolderBtn').style.display = inFolder ? '' : 'none';

  // Docs in current view
  const docs = allDocs.filter(d => (d.folderId || null) === inFolder).sort((a,b) => b.updatedAt - a.updatedAt);

  // Folders section (root only)
  const foldersSection = document.getElementById('foldersSection');
  const foldersList = document.getElementById('foldersList');
  if (!inFolder && folders.length > 0) {
    foldersSection.style.display = '';
    foldersList.innerHTML = folders.map(f => {
      const count = allDocs.filter(d => d.folderId === f.id).length;
      return `<li class="folder-card" data-id="${f.id}">
        <div class="folder-icon">${ICONS.folder}</div>
        <div class="folder-name">${escapeHtml(f.name)}</div>
        <div class="folder-count">${count} item${count !== 1 ? 's' : ''}</div>
      </li>`;
    }).join('');
    foldersList.querySelectorAll('.folder-card').forEach(el => {
      const id = el.dataset.id;
      addLongPress(el, () => folderMenu(id), () => openFolder(id));
    });
  } else {
    foldersSection.style.display = 'none';
  }

  // Docs list
  const list = document.getElementById('docsList');
  const empty = document.getElementById('emptyState');
  const docsLabel = document.getElementById('docsLabel');
  const hasFolders = !inFolder && folders.length > 0;

  if (docs.length === 0) {
    list.innerHTML = '';
    docsLabel.style.display = 'none';
    if (!hasFolders) { empty.style.display = ''; }
    else { empty.style.display = 'none'; }
  } else {
    empty.style.display = 'none';
    docsLabel.style.display = (hasFolders || inFolder) ? '' : 'none';
    docsLabel.textContent = inFolder ? 'Documents' : 'Recent';
    list.innerHTML = docs.map(d => `
      <li class="doc-card" data-id="${d.id}">
        <img class="doc-card-thumb" src="${d.pages[0]?.dataUrl || ''}" alt="">
        <div class="doc-card-info">
          <div class="doc-card-name">${escapeHtml(d.name)}</div>
          <div class="doc-card-meta">${d.pages.length} page${d.pages.length > 1 ? 's' : ''}</div>
        </div>
      </li>
    `).join('');
    list.querySelectorAll('.doc-card').forEach(el => {
      const id = el.dataset.id;
      addLongPress(el, () => docMenu(id), () => openDoc(id));
    });
  }
}

function goHome(){viewingDocId=null;state.currentFolder=null;showScreen('home');renderHome()}
function openFolder(id){state.currentFolder=id;renderHome()}

document.getElementById('homeBack').onclick = () => { state.currentFolder = null; renderHome(); };

document.getElementById('newFolderBtn').onclick = () => {
  const name = prompt('Folder name:', 'New Folder');
  if (!name || !name.trim()) return;
  const folders = getFolders();
  folders.push({ id: uuid(), name: name.trim() });
  saveFolders(folders);
  renderHome();
};

document.getElementById('deleteFolderBtn').onclick = async () => {
  const id = state.currentFolder;
  if (!id) return;
  if (!confirm('Delete this folder? Documents will move to root.')) return;
  const allDocs = await getAllDocs();
  const inFolder = allDocs.filter(d => d.folderId === id);
  await Promise.all(inFolder.map(d => { d.folderId = null; return saveDoc(d); }));
  saveFolders(getFolders().filter(f => f.id !== id));
  state.currentFolder = null;
  renderHome();
};

function folderMenu(id) {
  const folders = getFolders();
  const f = folders.find(x => x.id === id);
  if (!f) return;
  const action = prompt(`"${f.name}"\n\nType "rename" or "delete"`, '');
  if (!action) return;
  if (action.toLowerCase() === 'rename') {
    const nn = prompt('New name:', f.name);
    if (nn && nn.trim()) { f.name = nn.trim(); saveFolders(folders); renderHome(); }
  } else if (action.toLowerCase() === 'delete') {
    if (confirm('Delete folder? Documents will move to root.')) {
      getAllDocs().then(allDocs => {
        const inner = allDocs.filter(d => d.folderId === id);
        Promise.all(inner.map(d => { d.folderId = null; return saveDoc(d); })).then(() => {
          saveFolders(folders.filter(x => x.id !== id));
          renderHome();
        });
      });
    }
  }
}

async function docMenu(id) {
  const doc = await getDoc(id);
  if (!doc) return;
  const folders = getFolders();
  let msg = `"${doc.name}"\n\nOptions:\n- delete\n- move`;
  const action = prompt(msg, '');
  if (!action) return;
  action.toLowerCase() === 'delete'
    ? (confirm('Delete this document?') && deleteDoc(id).then(renderHome))
    : action.toLowerCase() === 'move'
      ? (folders.length === 0
          ? alert('No folders yet. Create one first.')
          : (() => {
              const list = folders.map((f, i) => `${i + 1}. ${f.name}`).join('\n');
              const choice = prompt(`Move to which folder?\n0. Root\n${list}`, '0');
              if (choice === null) return;
              const idx = parseInt(choice, 10);
              if (isNaN(idx)) return;
              doc.folderId = idx === 0 ? null : folders[idx - 1]?.id || null;
              doc.updatedAt = Date.now();
              saveDoc(doc).then(renderHome);
            })())
      : null;
}

// ==================== Capture ====================
function newDoc(){
  const name = 'Scan ' + new Date().toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  return { id: uuid(), name, createdAt: Date.now(), updatedAt: Date.now(), pages: [], folderId: state.currentFolder };
}
document.getElementById('scanBtn').onclick = () => { state.currentDoc = newDoc(); state.currentPageIndex = -1; document.getElementById('cameraInput').click(); };
document.getElementById('pickBtn').onclick = () => { state.currentDoc = newDoc(); state.currentPageIndex = -1; document.getElementById('galleryInput').click(); };
document.getElementById('cameraInput').onchange = handleFile;
document.getElementById('galleryInput').onchange = handleFile;

async function handleFile(e){
  const f = e.target.files[0];
  e.target.value = '';
  if (!f) { state.currentDoc = null; return; }
  const img = await loadImage(f);
  await startCrop(img, (resultCanvas) => {
    const ni = new Image();
    ni.onload = () => { state.currentImage = ni; state.currentMode = 'color'; showEditor(); };
    ni.src = resultCanvas.toDataURL('image/jpeg', 0.95);
  });
}

// ==================== Crop ====================
const cropState = { workCanvas: null, corners: [], dragging: null, lastPos: null, canvas: null, ctx: null, onComplete: null };

function waitForOpenCV(t = 2500) {
  return new Promise(r => {
    if (window.cv && cv.Mat) return r(true);
    const s = Date.now();
    const tick = () => {
      if (window.cv && cv.Mat) return r(true);
      if (Date.now() - s > t) return r(false);
      setTimeout(tick, 100);
    };
    tick();
  });
}

function orderCorners(pts) {
  const sum = pts.map(p => p.x + p.y);
  const diff = pts.map(p => p.x - p.y);
  return [
    pts[sum.indexOf(Math.min(...sum))],
    pts[diff.indexOf(Math.max(...diff))],
    pts[sum.indexOf(Math.max(...sum))],
    pts[diff.indexOf(Math.min(...diff))]
  ];
}

function detectDocumentEdges(wc) {
  if (!window.cv || !cv.Mat) return null;
  let src, gray, blur, edges, contours, hierarchy, kernel;
  try {
    src = cv.imread(wc);
    gray = new cv.Mat();
    blur = new cv.Mat();
    edges = new cv.Mat();
    contours = new cv.MatVector();
    hierarchy = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
    cv.GaussianBlur(gray, blur, new cv.Size(5, 5), 0);
    cv.Canny(blur, edges, 50, 150);
    kernel = cv.Mat.ones(3, 3, cv.CV_8U);
    cv.dilate(edges, edges, kernel);
    cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    const imgArea = src.cols * src.rows;
    let best = null, bestArea = imgArea * 0.15;
    for (let i = 0; i < contours.size(); i++) {
      const cnt = contours.get(i);
      const area = cv.contourArea(cnt);
      if (area > bestArea) {
        const peri = cv.arcLength(cnt, true);
        const approx = new cv.Mat();
        cv.approxPolyDP(cnt, approx, 0.02 * peri, true);
        if (approx.rows === 4) {
          if (best) best.delete();
          best = approx.clone();
          bestArea = area;
        }
        approx.delete();
      }
      cnt.delete();
    }
    if (!best) return null;
    const pts = [];
    for (let i = 0; i < 4; i++) pts.push({ x: best.data32S[i * 2], y: best.data32S[i * 2 + 1] });
    best.delete();
    return orderCorners(pts);
  } catch (err) { console.warn(err); return null; }
  finally { [src, gray, blur, edges, contours, hierarchy, kernel].forEach(m => { try { m && m.delete(); } catch (e) {} }); }
}

async function startCrop(img, onComplete) {
  cropState.onComplete = onComplete;
  cropState.dragging = null;
  const maxDim = 1600, scale = Math.min(1, maxDim / Math.max(img.width, img.height));
  const wc = document.createElement('canvas');
  wc.width = Math.round(img.width * scale);
  wc.height = Math.round(img.height * scale);
  wc.getContext('2d').drawImage(img, 0, 0, wc.width, wc.height);
  cropState.workCanvas = wc;
  const cvEl = document.getElementById('cropCanvas');
  cropState.canvas = cvEl;
  cropState.ctx = cvEl.getContext('2d');
  cvEl.width = wc.width;
  cvEl.height = wc.height;
  attachCropPointerEvents();
  const ready = await waitForOpenCV(2500);
  let corners = null;
  if (ready) { try { corners = detectDocumentEdges(wc); } catch (e) {} }
  if (!corners) corners = defaultCorners(wc.width, wc.height);
  cropState.corners = corners;
  drawCrop();
  showScreen('crop');
}

function defaultCorners(w, h) {
  const p = 0.05;
  return [
    { x: w * p, y: h * p },
    { x: w * (1 - p), y: h * p },
    { x: w * (1 - p), y: h * (1 - p) },
    { x: w * p, y: h * (1 - p) }
  ];
}

function handleRadius() { return Math.min(cropState.canvas.width, cropState.canvas.height) * 0.05; }

function getHandles() {
  const [tl, tr, br, bl] = cropState.corners;
  return [
    { type: 'corner', idx: 0, p: tl },
    { type: 'corner', idx: 1, p: tr },
    { type: 'corner', idx: 2, p: br },
    { type: 'corner', idx: 3, p: bl },
    { type: 'edge', idx: 0, p: { x: (tl.x + tr.x) / 2, y: (tl.y + tr.y) / 2 } }, // top
    { type: 'edge', idx: 1, p: { x: (tr.x + br.x) / 2, y: (tr.y + br.y) / 2 } }, // right
    { type: 'edge', idx: 2, p: { x: (br.x + bl.x) / 2, y: (br.y + bl.y) / 2 } }, // bottom
    { type: 'edge', idx: 3, p: { x: (bl.x + tl.x) / 2, y: (bl.y + tl.y) / 2 } }  // left
  ];
}

const EDGE_PAIRS = [[0, 1], [1, 2], [2, 3], [3, 0]];

function drawCrop() {
  const c = cropState.canvas, ctx = cropState.ctx;
  const [tl, tr, br, bl] = cropState.corners;

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(cropState.workCanvas, 0, 0);

  // Dim outside
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.beginPath();
  ctx.rect(0, 0, c.width, c.height);
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.fill('evenodd');
  ctx.restore();

  // Outline
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = Math.max(3, c.width * 0.004);
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.stroke();

  // Handles
  const rCorner = handleRadius();
  const rEdge = rCorner * 0.72;
  const active = cropState.dragging;
  for (const h of getHandles()) {
    const isActive = active && active.type === h.type && active.idx === h.idx;
    const r = h.type === 'corner' ? rCorner : rEdge;
    ctx.beginPath();
    ctx.arc(h.p.x, h.p.y, r, 0, Math.PI * 2);
    ctx.fillStyle = isActive ? '#1d4ed8' : (h.type === 'corner' ? '#3b82f6' : '#bfdbfe');
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = Math.max(2, c.width * 0.004);
    ctx.stroke();
  }
}

let cropEventsAttached = false;
function attachCropPointerEvents() {
  if (cropEventsAttached) return;
  cropEventsAttached = true;
  const c = cropState.canvas;
  c.style.touchAction = 'none';
  c.addEventListener('pointerdown', onCropDown);
  c.addEventListener('pointermove', onCropMove);
  c.addEventListener('pointerup', onCropUp);
  c.addEventListener('pointercancel', onCropUp);
}

function pointerToCanvas(e) {
  const c = cropState.canvas, r = c.getBoundingClientRect();
  return { x: (e.clientX - r.left) * (c.width / r.width), y: (e.clientY - r.top) * (c.height / r.height) };
}

function onCropDown(e) {
  const p = pointerToCanvas(e);
  const hit = handleRadius() * 1.8;
  const handles = getHandles();
  // Prefer corners on close hit
  handles.sort((a, b) => (a.type === 'corner' ? -1 : 1) - (b.type === 'corner' ? -1 : 1));
  for (const h of handles) {
    if (Math.hypot(h.p.x - p.x, h.p.y - p.y) < hit) {
      cropState.dragging = { type: h.type, idx: h.idx };
      cropState.lastPos = { x: p.x, y: p.y };
      cropState.canvas.setPointerCapture(e.pointerId);
      drawCrop();
      return;
    }
  }
}

function onCropMove(e) {
  if (!cropState.dragging) return;
  const p = pointerToCanvas(e);
  const c = cropState.canvas;
  const dx = p.x - cropState.lastPos.x;
  const dy = p.y - cropState.lastPos.y;
  cropState.lastPos = { x: p.x, y: p.y };

  const { type, idx } = cropState.dragging;
  if (type === 'corner') {
    const corner = cropState.corners[idx];
    corner.x = Math.max(0, Math.min(c.width, corner.x + dx));
    corner.y = Math.max(0, Math.min(c.height, corner.y + dy));
  } else {
    const [a, b] = EDGE_PAIRS[idx];
    for (const i of [a, b]) {
      cropState.corners[i].x = Math.max(0, Math.min(c.width, cropState.corners[i].x + dx));
      cropState.corners[i].y = Math.max(0, Math.min(c.height, cropState.corners[i].y + dy));
    }
  }
  drawCrop();
}

function onCropUp() { cropState.dragging = null; drawCrop(); }

function applyCropWarp() {
  const [tl, tr, br, bl] = cropState.corners, wc = cropState.workCanvas;
  const wT = Math.hypot(tr.x - tl.x, tr.y - tl.y), wB = Math.hypot(br.x - bl.x, br.y - bl.y);
  const maxW = Math.max(50, Math.round(Math.max(wT, wB)));
  const hL = Math.hypot(bl.x - tl.x, bl.y - tl.y), hR = Math.hypot(br.x - tr.x, br.y - tr.y);
  const maxH = Math.max(50, Math.round(Math.max(hL, hR)));

  if (!window.cv || !cv.Mat) {
    const minX = Math.min(tl.x, tr.x, br.x, bl.x), minY = Math.min(tl.y, tr.y, br.y, bl.y);
    const maxX = Math.max(tl.x, tr.x, br.x, bl.x), maxY = Math.max(tl.y, tr.y, br.y, bl.y);
    const out = document.createElement('canvas');
    out.width = maxX - minX; out.height = maxY - minY;
    out.getContext('2d').drawImage(wc, minX, minY, out.width, out.height, 0, 0, out.width, out.height);
    return out;
  }
  const src = cv.imread(wc);
  const srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, [tl.x, tl.y, tr.x, tr.y, br.x, br.y, bl.x, bl.y]);
  const dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, maxW, 0, maxW, maxH, 0, maxH]);
  const M = cv.getPerspectiveTransform(srcTri, dstTri);
  const dst = new cv.Mat();
  cv.warpPerspective(src, dst, M, new cv.Size(maxW, maxH), cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar(255, 255, 255, 255));
  const out = document.createElement('canvas');
  out.width = maxW; out.height = maxH;
  cv.imshow(out, dst);
  src.delete(); srcTri.delete(); dstTri.delete(); M.delete(); dst.delete();
  return out;
}

document.getElementById('cropApply').onclick = () => {
  const r = applyCropWarp();
  const cb = cropState.onComplete;
  cropState.onComplete = null;
  if (cb) cb(r);
};
document.getElementById('cropBack').onclick = () => {
  if (confirm('Discard this scan?')) {
    cropState.onComplete = null;
    state.currentImage = null;
    state.currentDoc = null;
    goHome();
  }
};
document.getElementById('cropAuto').onclick = () => {
  const c = detectDocumentEdges(cropState.workCanvas);
  if (c) { cropState.corners = c; drawCrop(); }
  else alert('No document detected. Adjust corners manually.');
};
document.getElementById('cropReset').onclick = () => {
  cropState.corners = defaultCorners(cropState.canvas.width, cropState.canvas.height);
  drawCrop();
};

// ==================== Editor ====================
const editorCanvas = document.getElementById('editorCanvas'), ectx = editorCanvas.getContext('2d');

async function showEditor() {
  const img = state.currentImage;
  if (!img) return;
  const maxDim = 1400, scale = Math.min(1, maxDim / Math.max(img.width, img.height));
  editorCanvas.width = Math.round(img.width * scale);
  editorCanvas.height = Math.round(img.height * scale);
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === state.currentMode));
  showScreen('editor');
  renderEditor();
}

function renderEditor() {
  const img = state.currentImage;
  if (!img) return;
  ectx.drawImage(img, 0, 0, editorCanvas.width, editorCanvas.height);
  if (state.currentMode === 'original') return;
  try {
    if (!window.cv || !cv.imread) return;
    let src = cv.imread(editorCanvas), out = new cv.Mat();
    if (state.currentMode === 'gray') cv.cvtColor(src, out, cv.COLOR_RGBA2GRAY);
    else if (state.currentMode === 'bw') {
      let g = new cv.Mat();
      cv.cvtColor(src, g, cv.COLOR_RGBA2GRAY);
      cv.adaptiveThreshold(g, out, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 15, 10);
      g.delete();
    } else if (state.currentMode === 'color') src.convertTo(out, -1, 1.15, -10);
    if (out.channels() === 1) {
      let rgba = new cv.Mat();
      cv.cvtColor(out, rgba, cv.COLOR_GRAY2RGBA);
      cv.imshow(editorCanvas, rgba);
      rgba.delete();
    } else cv.imshow(editorCanvas, out);
    src.delete(); out.delete();
  } catch (e) { console.warn(e); }
}

document.querySelectorAll('.mode-tab').forEach(t => {
  t.onclick = () => {
    state.currentMode = t.dataset.mode;
    document.querySelectorAll('.mode-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderEditor();
  };
});

document.getElementById('rotateBtn').onclick = () => {
  const img = state.currentImage;
  if (!img) return;
  const c = document.createElement('canvas');
  c.width = img.height; c.height = img.width;
  const x = c.getContext('2d');
  x.translate(c.width / 2, c.height / 2);
  x.rotate(Math.PI / 2);
  x.drawImage(img, -img.width / 2, -img.height / 2);
  const ni = new Image();
  ni.onload = () => { state.currentImage = ni; showEditor(); };
  ni.src = c.toDataURL('image/jpeg', 0.95);
};

document.getElementById('editorBack').onclick = () => {
  if (confirm('Discard this scan?')) { state.currentImage = null; state.currentDoc = null; goHome(); }
};

document.getElementById('editorSave').onclick = async () => {
  if (!state.currentDoc) return;
  const dataUrl = editorCanvas.toDataURL('image/jpeg', 0.9), page = { id: uuid(), dataUrl };
  if (state.currentPageIndex >= 0) state.currentDoc.pages[state.currentPageIndex] = page;
  else state.currentDoc.pages.push(page);
  state.currentDoc.updatedAt = Date.now();
  await saveDoc(state.currentDoc);
  const docId = state.currentDoc.id;
  state.currentImage = null;
  state.currentDoc = null;
  state.currentPageIndex = -1;
  await renderHome();
  openDoc(docId);
};

// ==================== Document ====================
async function openDoc(id) {
  const doc = await getDoc(id);
  if (!doc) return;
  viewingDocId = id;
  document.getElementById('docTitle').textContent = doc.name;
  document.getElementById('pagesList').innerHTML = doc.pages.map((p, i) => `<img class="page-thumb" src="${p.dataUrl}" alt="Page ${i + 1}">`).join('');
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
  if (confirm('Delete this document?')) { await deleteDoc(viewingDocId); goHome(); }
};
document.getElementById('exportPdfBtn').onclick = async () => {
  const doc = await getDoc(viewingDocId);
  if (!doc || doc.pages.length === 0) return;
  const { jsPDF } = window.jspdf, pdf = new jsPDF('p', 'mm', 'a4');
  const pageW = 210, pageH = 297;
  for (let i = 0; i < doc.pages.length; i++) {
    if (i > 0) pdf.addPage();
    const img = await loadImageFromUrl(doc.pages[i].dataUrl);
    const ratio = Math.min(pageW / img.width, pageH / img.height), w = img.width * ratio, h = img.height * ratio;
    pdf.addImage(doc.pages[i].dataUrl, 'JPEG', (pageW - w) / 2, (pageH - h) / 2, w, h);
  }
  pdf.save(doc.name + '.pdf');
};

// ==================== Install ====================
let deferredPrompt;
const installBar = document.getElementById('installBar');
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; installBar.classList.remove('hidden'); });
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
  themeBtn.innerHTML = t === 'dark' ? ICONS.sun : ICONS.moon;
}
applyTheme(localStorage.getItem('theme') || 'light');
themeBtn.onclick = () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

// ==================== Init ====================
(async () => {
  db = await openDB();
  await renderHome();
  showScreen('home');
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
})();
</script>
</body>
</html>