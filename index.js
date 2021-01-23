const audio = document.querySelector('.audio');

const confirm = window.confirm('Продолжить просмотр?');

const playingTime = () => {
	localStorage.setItem('time', audio.currentTime);
};

const setTime = () => {
	audio.currentTime = +localStorage.getItem('time');
};

audio.addEventListener('timeupdate', playingTime);

if (confirm) document.addEventListener('DOMContentLoaded', setTime);
