const text = document.getElementById("text");
const speedEl = document.getElementById("speed");
const prog = "Sungilinfo High School Class 'get a job of JavaScript";
let idx = 0;
let speed = 300 / speedEl.value; // Added missing '=' for assignment

// initial call
writeText();

function writeText() {
    text.innerText = prog.slice(0, idx); // Added '=' for assignment and corrected concatenation
    idx++;
    if (idx > prog.length) {
        idx = 0; // Changed reset index to 0 instead of 1
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
