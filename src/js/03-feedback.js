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

function getFormData() {
  return {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = getFormData();

  if (formData.email === '' || formData.message === '') {
    alert('Всі поля повинні бути заповнені 🛑📝😊');
  } else {
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(KEY_LOCAL);
  }
}

function onFormInput() {
  const formData = getFormData();
  localStorage.setItem(KEY_LOCAL, JSON.stringify(formData));
}
