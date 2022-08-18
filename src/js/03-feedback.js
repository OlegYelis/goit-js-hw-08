import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailAreaEl = document.querySelector('input[name="email"]');
const messageAreaEl = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback_form_state';
const messageInfo = {};

if (localStorage.getItem(STORAGE_KEY)) {
  const messageInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

  emailAreaEl.value = messageInfo.email ? messageInfo.email : '';
  messageAreaEl.value = messageInfo.message ? messageInfo.message : '';
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(messageInfo));
}

const addInfoToLs = evt => {
  messageInfo[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messageInfo));
};

const onFormSubmit = evt => {
  evt.preventDefault();

  console.log(messageInfo);

  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();
};

formEl.addEventListener('input', throttle(addInfoToLs, 500));
formEl.addEventListener('submit', onFormSubmit);
