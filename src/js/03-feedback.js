

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let localStorageDataChange = { email: emailInput.value, message: messageInput.value };


const onInputLocalStorageDataChange = throttle(() => {
    localStorageDataChange = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageDataChange));
}, 500);


function uploadDataFromLocalStorageToTextArea(){
    const dataFromLocStor = localStorage.getItem(LOCALSTORAGE_KEY);
    if (dataFromLocStor) {
        const { email, message } = JSON.parse(dataFromLocStor);
        emailInput.value = email;
        messageInput.value = message;
    }
    return dataFromLocStor;
};

function onFormSubmit(event){
    
    if (emailInput.value === '' || messageInput.value === '') {
        return alert('Fill all of the fields, please');
    }
    event.preventDefault();
    onInputLocalStorageDataChange();
    console.log(localStorageDataChange);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    emailInput.value = '';
    messageInput.value = '';
};

form.addEventListener('input',onInputLocalStorageDataChange);
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', uploadDataFromLocalStorageToTextArea);