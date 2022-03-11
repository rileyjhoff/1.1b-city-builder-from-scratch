// import functions and grab DOM elements
const topImage = document.getElementById('image-1');
const middleImage = document.getElementById('image-2');
const bottomImage = document.getElementById('image-3');

const topDropdown = document.getElementById('dropdown-1');
const middleDropdown = document.getElementById('dropdown-2');
const bottomDropdown = document.getElementById('dropdown-3');

const topPleaseSelect = document.getElementById('select-1');
const middlePleaseSelect = document.getElementById('select-2');
const bottomPleaseSelect = document.getElementById('select-3');

const topCountEl = document.getElementById('top');
const middleCountEl = document.getElementById('middle');
const bottomCountEl = document.getElementById('bottom');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

const sloganAreaEl = document.getElementById('slogan-list-div');

console.log(topImage, topDropdown, topCountEl, middleImage, middleDropdown, middleCountEl, bottomImage, bottomDropdown, bottomCountEl, sloganInput, sloganButton, sloganAreaEl);

// let state
top = 0;
middle = 0;
bottom = 0;
const slogans = [];
topPleaseSelect.disabled = true;
middlePleaseSelect.disabled = true;
bottomPleaseSelect.disabled = true;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
