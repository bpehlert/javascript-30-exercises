const slider = document.querySelector(".items");
let isDown = false;
let scrollLeft;
let startX;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft; // captures how far left the page is scrolled.
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault(); // prevents the browser from trying to do other things highlight text.
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // multiplication speeds up walk.
  slider.scrollLeft = scrollLeft - walk;
});
