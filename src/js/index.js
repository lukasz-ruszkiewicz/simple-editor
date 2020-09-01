import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

let savedText = "";

const textArea = document.querySelector('.editor-form__input');
const buttonLoad = document.querySelector('.editor-form__button--load');
const buttonSave = document.querySelector('.editor-form__button--save');

buttonLoad.addEventListener('click', loadText);
buttonSave.addEventListener('click', saveText);

function loadText()
{
 console.log('LOAD');
}

function saveText()
{
    console.log(SAVE);
    
}