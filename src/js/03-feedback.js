
import throttle from 'lodash.throttle';




const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');


const LOCALSTORAGE_KEY = "feedback-form-state";

let objectToBeSubmitedToLocalStorage = {email: "", message: ""};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputLocalStorageDataChange, 500));


function onFormSubmit(event) { 
    event.preventDefault();

    if (email.value === '' || message.value === '') {
        return alert('Fill all of the fields, please');
    }

    objectToBeSubmitedToLocalStorage = {email: email.value, message: message.value};
    localStorage.removeItem(LOCALSTORAGE_KEY);
    email.value = "";
    message.value = "";
    form.reset(); 
}

function onInputLocalStorageDataChange(event) {
    const { name, value } = event.target;
    objectToBeSubmitedToLocalStorage[name] = value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToBeSubmitedToLocalStorage));
}

function loadDataFromLocalStorage() {
    try {

        const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
        return savedData === null ? undefined : JSON.parse(savedData);
        
    } catch (error) {

        console.error('Get state error: ', error.message);
    }
}

function uploadDataFromLocalStorageToTextArea() { 
    const storageData = loadDataFromLocalStorage();
        if (storageData) {
            email.value = storageData.email;
            message.value = storageData.message;
        }

    return storageData;
}   

uploadDataFromLocalStorageToTextArea()





