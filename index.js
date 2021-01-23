const audio = document.querySelector('.audio');

const playingTime = () => {
	localStorage.setItem('time', audio.currentTime);
};

const setTime = () => {
	audio.currentTime = +localStorage.getItem('time');
};

audio.addEventListener('timeupdate', playingTime);
document.addEventListener('DOMContentLoaded', setTime);
