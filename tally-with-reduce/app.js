// Converts the nodelist into an array
const timeNode = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNode
  .map(node => node.dataset.time)
  .map(time => {
    const [mins, secs] = time.split(":");
    return parseInt(mins) * 60 + parseInt(secs);
  })
  .reduce((totalSeconds, vidSecs) => totalSeconds + vidSecs); // Adds up the total number of seconds

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / (60 * 60));
secondsLeft = secondsLeft % (60 * 60);

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${mins}:${secondsLeft}`);
