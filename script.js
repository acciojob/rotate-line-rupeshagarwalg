//your JS code here. If required.
//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

setInterval(() => {
  angle += 2; // increase angle by 2 degrees
  line.style.transform = translate(-50%, -50%) rotate(${angle}deg);
}, 20); // update every 20 milliseconds