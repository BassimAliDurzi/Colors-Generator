//Red
let redContainer = document.getElementById("redContainer");
let redRange = document.getElementById("redRange");
let redValue = document.getElementById("redValue");

redValue.innerText = redRange.value;
redContainer.style.backgroundColor = `rgb(${redRange.value},0,0)`;

function redFunc() {
  redValue.innerText = this.value;
  redContainer.style.backgroundColor = `rgb(${redRange.value},0,0)`;
  color.style.backgroundColor = `rgb(${redRange.value},${greenRange.value}, ${blueRange.value})`;
  colorValue.innerText = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}

redRange.oninput = redFunc;

//Green
let greenContainer = document.getElementById("greenContainer");
let greenRange = document.getElementById("greenRange");
let greenValue = document.getElementById("greenValue");

greenValue.innerText = greenRange.value;
greenContainer.style.backgroundColor = `rgb(0,${greenRange.value},0)`;

function greenFunc() {
  greenValue.innerText = this.value;
  greenContainer.style.backgroundColor = `rgb(0,${greenRange.value},0)`;
  color.style.backgroundColor = `rgb(${redRange.value},${greenRange.value}, ${blueRange.value})`;
  colorValue.innerText = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}

greenRange.oninput = greenFunc;

//blue

let blueContainer = document.getElementById("blueContainer");
let blueRange = document.getElementById("blueRange");
let blueValue = document.getElementById("blueValue");

blueValue.innerText = blueRange.value;
blueContainer.style.backgroundColor = `rgb(0,0, ${blueRange.value})`;

function blueFunc() {
  blueValue.innerText = this.value;
  blueContainer.style.backgroundColor = `rgb(0,0, ${blueRange.value})`;
  color.style.backgroundColor = `rgb(${redRange.value},${greenRange.value}, ${blueRange.value})`;
  colorValue.innerText = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}

blueRange.oninput = blueFunc;

//Color

let color = document.getElementById("color");
let colorValue = document.getElementById("colorValue");
color.style.backgroundColor = `rgb(${redRange.value},${greenRange.value}, ${blueRange.value})`;
colorValue.innerText = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;