// import functions and grab DOM elements
import { generateChar, setChar } from './functions.js';

// initialize global state
const charForm = document.getElementById('char-select-form');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

charForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(charForm);
    const charObj = generateChar(formData);
    setChar(charObj);
    window.location.replace('./map');
});
