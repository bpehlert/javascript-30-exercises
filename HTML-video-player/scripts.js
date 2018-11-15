// Get our elements from the DOM
const player = document.querySelector('.player');
const video = player.querySelector('video');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');


// Build out the functions

function toggleVideo () {
   const method = video.paused ? 'play' : 'pause';
   video[method]();
};

function updateButton () {
   const icon = this.paused ? '►' : '❚ ❚';
   playButton.textContent = icon;
};

function skip () {
   video.currentTime += parseFloat(this.dataset.skip);
}

function manageRangeChange (e) {   
   video[this.name] = this.value;
};

function manageProgressChange (e) {     
   const percent = (video.currentTime / video.duration) * 100;
   progressBar.style.flexBasis = `${percent}%`;
};

function scrub (e) {
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
   video.currentTime = scrubTime;
};


// Set up event listeners

window.addEventListener('keypress', (e) => {
   if (e.keyCode === 32) toggleVideo();      
   return;
});
 
video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', manageProgressChange);

playButton.addEventListener('click', toggleVideo);

ranges.forEach(range => range.addEventListener("mousemove", manageRangeChange));
ranges.forEach(range => range.addEventListener("click", manageRangeChange));


skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


