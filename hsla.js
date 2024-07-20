// HUE
let hueValue = document.getElementById("hueValue");
let hueRange = document.getElementById("hueRange");
hueValue.innerText = hueRange.value;

function hueFunc() {
  hueValue.innerText = this.value;
  colorValue.innerText = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
  color.style.backgroundColor = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
}

hueRange.oninput = hueFunc;

// Saturation
let saturationValue = document.getElementById("saturationValue");
let saturationRange = document.getElementById("saturationRange");
saturationValue.innerText = saturationRange.value + "%";

function saturationFunc() {
  saturationValue.innerText = this.value + "%";
  colorValue.innerText = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
  color.style.backgroundColor = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
}

saturationRange.oninput = saturationFunc;

// Lightness
let lightnessValue = document.getElementById("lightnessValue");
let lightnessRange = document.getElementById("lightnessRange");
lightnessValue.innerText = lightnessRange.value + "%";

function lightnessFunc() {
  lightnessValue.innerText = this.value + "%";
  colorValue.innerText = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
  color.style.backgroundColor = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%)`;
}

lightnessRange.oninput = lightnessFunc;

//Alpha
let alphaValue = document.getElementById("alphaValue");
let alphaRange = document.getElementById("alphaRange");
alphaValue.innerText = alphaRange.value;

function alphaFunc() {
  alphaValue.innerText = this.value;
  colorValue.innerText = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
  color.style.backgroundColor = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
}

alphaRange.oninput = alphaFunc;

//color
let color = document.getElementById("color");
let colorValue = document.getElementById("colorValue");
colorValue.innerText = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
color.style.backgroundColor = `hsl(${hueRange.value}, ${saturationRange.value}%, ${lightnessRange.value}%, ${alphaRange.value})`;
