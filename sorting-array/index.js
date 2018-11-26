const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

function strip(bandName) {
  return bandName.replace(/^(an |a |the )/i, "").trim(); //Trim function removes all white space before and after string (not necessary)
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// const sortedBands = bands.sort((a, b) => {
//   if (strip(a) > strip(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

document.querySelector("#bands").innerHTML = sortedBands
  .map(name => `<li>${name}</li>`)
  .join("");
