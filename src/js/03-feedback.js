import throttle from "lodash.throttle";

const STOREGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
};
const formData = {};

onColonizeTextarea();

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
refs.input.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
  
  });

function onFormSubmit(event) { 
   event.preventDefault();
   event.currentTarget.reset();
    
 localStorage.removeItem(STOREGE_KEY);
   
};

function onTextareaInput(event) {
     
 localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
 };

function onColonizeTextarea(event) {

    const savedMessage = localStorage.getItem(STOREGE_KEY);
    const ParsedSaveMessage = JSON.parse(savedMessage)
      if (savedMessage) {
        refs.textarea.value = ParsedSaveMessage.message;
        refs.input.value = ParsedSaveMessage.email;
    }
};
   