const slides = [...document.querySelectorAll('.slide')];
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');
const currentTitle = document.getElementById('currentTitle');
const progressFill = document.getElementById('progressFill');
const overviewOverlay = document.getElementById('overviewOverlay');
const overviewList = document.getElementById('overviewList');
let index = 0;
totalSlides.textContent = String(slides.length).padStart(2, '0');

function showSlide(nextIndex) {
  index = Math.max(0, Math.min(slides.length - 1, nextIndex));
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  currentSlide.textContent = String(index + 1).padStart(2, '0');
  currentTitle.textContent = slides[index].dataset.title || `Slide ${index + 1}`;
  progressFill.style.width = `${((index + 1) / slides.length) * 100}%`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
  prevBtn.style.opacity = index === 0 ? '.35' : '1';
  nextBtn.style.opacity = index === slides.length - 1 ? '.35' : '1';
  [...overviewList.children].forEach((item, i) => item.classList.toggle('current', i === index));
}
function openOverview() {
  overviewOverlay.classList.add('open');
  overviewOverlay.setAttribute('aria-hidden', 'false');
}
function closeOverview() {
  overviewOverlay.classList.remove('open');
  overviewOverlay.setAttribute('aria-hidden', 'true');
}
slides.forEach((slide, i) => {
  const item = document.createElement('button');
  item.className = 'overview-item';
  item.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span><b>${slide.dataset.title || 'Slide'}</b>`;
  item.addEventListener('click', () => { showSlide(i); closeOverview(); });
  overviewList.appendChild(item);
});
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
document.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => showSlide(index + 1)));
document.getElementById('overviewBtn').addEventListener('click', openOverview);
document.getElementById('closeOverview').addEventListener('click', closeOverview);
overviewOverlay.addEventListener('click', e => { if (e.target === overviewOverlay) closeOverview(); });
document.getElementById('restartBtn').addEventListener('click', () => showSlide(0));
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && !overviewOverlay.classList.contains('open')) showSlide(index + 1);
  if (e.key === 'ArrowLeft' && !overviewOverlay.classList.contains('open')) showSlide(index - 1);
  if (e.key === 'Escape') closeOverview();
});

// Interactive element explorer
const elementContent = {
  teks: {n:'01', visual:'Aa', title:'Teks', body:'Teks memberi struktur dan menjelaskan inti pesan. Gunakan kalimat singkat, hierarki judul yang jelas, dan ukuran huruf yang mudah dibaca.', example:'Contoh: subtitle video pembelajaran'},
  gambar: {n:'02', visual:'▧', title:'Gambar', body:'Foto, ilustrasi, dan diagram membantu pengguna mengenali objek atau memahami hubungan informasi dengan cepat.', example:'Contoh: diagram anatomi atau infografik'},
  audio: {n:'03', visual:'♫', title:'Audio', body:'Narasi dan efek suara dapat memperkuat suasana atau menjelaskan materi. Sediakan transkrip atau alternatif teks bila memungkinkan.', example:'Contoh: narasi pada modul e-learning'},
  video: {n:'04', visual:'▶', title:'Video', body:'Video menggabungkan gambar bergerak dan suara untuk menunjukkan proses. Durasi, kualitas, dan kejelasan pesan perlu diperhatikan.', example:'Contoh: tutorial praktik laboratorium'},
  interaksi: {n:'05', visual:'↗', title:'Interaktivitas', body:'Interaksi memungkinkan pengguna memilih, menjawab, atau mengendalikan konten. Respons harus jelas dan membantu tujuan belajar.', example:'Contoh: kuis dengan umpan balik'}
};
const elementDetail = document.getElementById('elementDetail');
document.querySelectorAll('.element-tab').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.element-tab').forEach(tab => tab.classList.remove('selected'));
  btn.classList.add('selected');
  const d = elementContent[btn.dataset.element];
  elementDetail.innerHTML = `<span class="detail-kicker">ELEMEN ${d.n}</span><div class="detail-visual">${d.visual}</div><h3>${d.title}</h3><p>${d.body}</p><div class="example-chip">${d.example}</div>`;
}));

// Three-question quiz with feedback
const quiz = [
  {q:'Apa tujuan utama menggabungkan beberapa media dalam sebuah konten?', options:['Membuat ukuran file selalu lebih besar','Menyampaikan informasi melalui format yang saling melengkapi','Menghilangkan kebutuhan akan teks'], answer:1, explain:'Benar. Setiap media dapat saling melengkapi agar pesan lebih jelas dan sesuai kebutuhan pengguna.'},
  {q:'Fitur mana yang membantu pengguna dengan gangguan pendengaran memahami video?', options:['Subtitle atau caption','Animasi dekoratif yang cepat','Musik latar lebih keras'], answer:0, explain:'Benar. Subtitle/caption menyajikan informasi audio dalam bentuk teks.'},
  {q:'Apa praktik yang tepat saat memakai gambar dari internet?', options:['Hilangkan nama pembuatnya','Gunakan tanpa memeriksa izin','Periksa lisensi dan cantumkan atribusi yang diperlukan'], answer:2, explain:'Benar. Periksa izin penggunaan aset dan berikan atribusi sesuai ketentuan lisensinya.'}
];
let quizIndex = 0, answered = false;
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const quizNext = document.getElementById('quizNext');
const quizCount = document.getElementById('quizCount');
const quizProgress = document.getElementById('quizProgress');
function renderQuiz() {
  const q = quiz[quizIndex]; answered = false;
  quizCount.textContent = `PERTANYAAN ${quizIndex + 1} / ${quiz.length}`;
  quizProgress.style.width = `${((quizIndex + 1) / quiz.length) * 100}%`;
  quizQuestion.textContent = q.q;
  quizOptions.innerHTML = '';
  q.options.forEach((option, i) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.dataset.answer = i;
    button.addEventListener('click', () => chooseAnswer(i));
    quizOptions.appendChild(button);
  });
  quizFeedback.textContent = 'Pilih jawaban yang menurutmu paling tepat.';
  quizNext.disabled = true;
  quizNext.innerHTML = quizIndex === quiz.length - 1 ? 'Selesai <span>✓</span>' : 'Berikutnya <span>→</span>';
}
function chooseAnswer(answer) {
  if (answered) return;
  answered = true;
  const q = quiz[quizIndex];
  [...quizOptions.children].forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add('correct');
    if (i === answer && answer !== q.answer) button.classList.add('wrong');
  });
  quizFeedback.textContent = answer === q.answer ? q.explain : `Belum tepat. ${q.explain}`;
  quizFeedback.style.color = answer === q.answer ? 'var(--mint)' : 'var(--pink)';
  quizNext.disabled = false;
}
quizNext.addEventListener('click', () => {
  if (!answered) return;
  if (quizIndex < quiz.length - 1) { quizIndex++; renderQuiz(); }
  else { quizIndex = 0; renderQuiz(); quizFeedback.textContent = 'Kuis selesai! Coba lagi untuk mengulang pemahaman.'; }
});
renderQuiz();
showSlide(0);
