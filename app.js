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
const sloganHeader = document.getElementById('slogan-header');

// let state
let topCount = 0;
let middleCount = 0;
let bottomCount = 0;
const slogans = [];
statsEl.onload = displayCountStats();
topPleaseSelect.disabled = true;
middlePleaseSelect.disabled = true;
bottomPleaseSelect.disabled = true;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
topDropdown.addEventListener('change', () => {
    topCount++;
    topImage.src = `./assets/sky-${topDropdown.value}.jpg`;
    topImage.classList.remove('hide');
    displayCountStats();
});

middleDropdown.addEventListener('change', () => {
    middleCount++;
    middleImage.src = `./assets/terrain-${middleDropdown.value}.jpg`;
    middleImage.classList.remove('hide');
    displayCountStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomCount++;
    bottomImage.src = `./assets/buildings-${bottomDropdown.value}.jpg`;
    bottomImage.classList.remove('hide');
    displayCountStats();
});

sloganButton.addEventListener('click', () => {
    displaySlogans();
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
    sloganHeader.classList.remove('hide');
    slogans.push(newSlogan);
    sloganHeader.textContent = 'Slogan:';
    if (slogans.length > 1) {
        sloganHeader.textContent = 'Slogans:';
    }
    sloganAreaEl.append(sloganHeader);
    for (let slogan of slogans) {
        const addSlogan = document.createElement('p');
        addSlogan.textContent = slogan;
        sloganAreaEl.append(addSlogan);
    }
    sloganInput.value = '';
}