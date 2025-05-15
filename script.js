const sounds = [
  'sounds/monsterkill.mp3',
  'sounds/china.mp3',
  'sounds/usa.mp3'
];

let audio;

document.body.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const soundSrc = sounds[randomIndex];

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  audio = new Audio(soundSrc);
  audio.loop = true;
  audio.volume = 1.0;

  audio.play().catch(err => console.log('Ошибка воспроизведения:', err));
});
