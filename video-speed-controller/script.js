const video = document.querySelector("video");
const speed = document.querySelector(".speed-bar");
const bar = document.querySelector(".speed");

// console.log(video, speed, bar);

function handleSpeedChange(e) {
  const y = e.pageY - this.offsetTop;
  const 
}

bar.addEventListener("mousemove", handleSpeedChange);
