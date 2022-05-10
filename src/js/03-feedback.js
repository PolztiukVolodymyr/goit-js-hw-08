import throttle from "lodash.throttle";

const STOREGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
};
const formData = {};



refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

onInputChenge();

function onFormInput(e) { 
  formData.email = refs.input.value;
  formData.message = refs.textarea.value;
  // formData[e.target.name] = e.target.value;
  localStorage.setItem(STOREGE_KEY, JSON.stringify(formData)); 
  //  console.log("formData:", formData)
}
 
function onFormSubmit(event) { 
  event.preventDefault(); 
  
  if (refs.textarea.value && refs.input.value !== "") {
   localStorage.removeItem(STOREGE_KEY);
   event.currentTarget.reset();
  } else { alert("Please fill all these fields") };
   
};

function onInputChenge(e) {
  const savedMessage = localStorage.getItem(STOREGE_KEY);
  const parsedSaveMessage = JSON.parse(savedMessage)
  if(savedMessage){
  if (parsedSaveMessage.email) {
    refs.input.value = parsedSaveMessage.email;
  };
  
    if (parsedSaveMessage.message) {
      refs.textarea.value = parsedSaveMessage.message;
    }
  };

};
