var throttle = require('lodash/throttle');

const KEY_LOCAL = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

const savedFormData = localStorage.getItem(KEY_LOCAL);
const parsedFormData = JSON.parse(savedFormData);

if (parsedFormData) {
  for (const key of Object.keys(parsedFormData)) {
    formEl.elements[key].value = parsedFormData[key];
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  const formData = {
    email,
    message,
  };

  if (email === '' || message === '') {
    alert('Всі поля повинні бути заповнені 🛑📝😊');
  } else {
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(KEY_LOCAL);
  }
}

function onFormInput() {
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}
