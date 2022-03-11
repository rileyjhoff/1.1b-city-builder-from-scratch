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

const statsEl = document.getElementById('stats');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

const sloganAreaEl = document.getElementById('slogan-list-div');

// let state
// topCount = 0;
// middleCount = 0;
// bottomCount = 0;
const slogans = [];
topPleaseSelect.disabled = true;
middlePleaseSelect.disabled = true;
bottomPleaseSelect.disabled = true;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
topDropdown.addEventListener('change', () => {
    console.log('this is working');
});

middleDropdown.addEventListener('change', () => {
    console.log('this is working');
});

bottomDropdown.addEventListener('change', () => {
    console.log('this is working');
});

sloganButton.addEventListener('click', () => {
    console.log('this is working');
});

// functions

function displayCountStats() {
    statsEl.textContent = `You've changed the sky ${topCount} times. 
    You've changed the terrain ${middleCount} times. 
    You've changed the architecture ${bottomCount} times.`;
}

function displaySlogans() {
    sloganAreaEl.textContent = '';
    const newSlogan = sloganInput.value;
    slogans.push(newSlogan);
    for (let slogan of slogans) {
        const addSlogan = document.createElement('p');
        sloganAreaEl.append(addSlogan);
    }
    sloganInput.value = '';
}