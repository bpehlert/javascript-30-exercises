const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logClick(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); // This will stop the bubbling.
}

divs.forEach(div => div.addEventListener("click", logClick));

button.addEventListener(
  "click",
  () => {
    console.log("clicked!!!");
  },
  {
    once: true //Will only run the function once, sort of like .removeEventListener
  }
);

// Adding the capture true value makes things on the capture down,
// rather than the default of false, which bubbles things up.
// divs.forEach(div =>
//   div.addEventListener("click", logClick, {
//     capture: true
//   })
// );
