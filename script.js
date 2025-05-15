const audio = new Audio('sound.mp3');
audio.loop = true;
audio.volume = 1.0;

document.body.addEventListener('click', () => {
  audio.play().catch(err => console.log('Ошибка воспроизведения:', err));
});
