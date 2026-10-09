// ---------- Install button logic ----------
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const installHint = document.getElementById('installHint');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'inline-block';
  installHint.style.display = 'none';
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('Install outcome:', outcome);
  deferredPrompt = null;
  installBtn.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
  installBtn.style.display = 'none';
  console.log('App installed');
});

// Fallback hint if beforeinstallprompt never fires
setTimeout(() => {
  if (installBtn.style.display === 'none') {
    installHint.style.display = 'block';
  }
}, 3000);

// ---------- Scanner logic ----------
const file = document.getElementById('file');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();

file.onchange = e => {
  const f = e.target.files[0];
  if (!f) return;

  const url = URL.createObjectURL(f);
  img.onload = () => {
    const maxW = 1200;
    const scale = Math.min(1, maxW / img.width);

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = url;
};

document.getElementById('scan').onclick = () => {
  if (!window.cv || !cv.Mat) return alert('OpenCV still loading...');

  let src = cv.imread(canvas);
  let gray = new cv.Mat();
  let blur = new cv.Mat();
  let thresh = new cv.Mat();

  cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
  cv.GaussianBlur(gray, blur, new cv.Size(5, 5), 0);
  cv.adaptiveThreshold(
    blur, thresh, 255,
    cv.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv.THRESH_BINARY, 11, 2
  );

  cv.imshow(canvas, thresh);

  src.delete(); gray.delete(); blur.delete(); thresh.delete();
};

document.getElementById('ocr').onclick = async () => {
  const result = await Tesseract.recognize(canvas, 'eng');
  document.getElementById('text').textContent = result.data.text;
};

document.getElementById('pdf').onclick = () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');

  const pageW = 210;
  const pageH = 297;
  const imgData = canvas.toDataURL('image/jpeg', 0.9);

  const ratio = Math.min(pageW / canvas.width, pageH / canvas.height);
  const w = canvas.width * ratio;
  const h = canvas.height * ratio;

  pdf.addImage(imgData, 'JPEG', 0, 0, w, h);
  pdf.save('scan.pdf');
};

// ---------- Service worker ----------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
