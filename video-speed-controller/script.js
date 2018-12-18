const video = document.querySelector("video");
const speed = document.querySelector(".speed-bar");
const bar = document.querySelector(".speed");

function handleSpeedChange(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + "%";
  const rateMin = 0.4;
  const rateMax = 4;
  const rate = percent * (rateMax - rateMin) + rateMin;

  speed.style.height = height;
  speed.textContent = rate.toFixed(1) + "x";
  video.playbackRate = rate;
}

bar.addEventListener("mousemove", handleSpeedChange);
