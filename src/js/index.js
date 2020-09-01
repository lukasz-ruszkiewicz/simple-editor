import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const textArea = document.querySelector('.editor-form__input');
const buttonLoad = document.querySelector('.editor-form__button--load');
const buttonSave = document.querySelector('.editor-form__button--save');
//textArea.value = savedText;

buttonLoad.addEventListener('click', loadText);
buttonSave.addEventListener('click', saveText);


function loadText()
{
    let saved = localStorage.getItem("saved");
    textArea.value = saved;
}

function saveText()
{

    localStorage.setItem("saved",textArea.value);
    
}