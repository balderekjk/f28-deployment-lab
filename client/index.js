const input = document.querySelector('input');
const submit = document.querySelector('button');
const emailConfirm = document.querySelector('#email-confirm');
let inputVal = '';

const updateInputVal = (e) => {
  inputVal = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  let confirmMsg = document.createElement('p');
  confirmMsg.textContent = `Email: ${inputVal}, was successfully added to email list`;
  emailConfirm.appendChild(confirmMsg);
  rollbar.log('email successfully submitted');
};

input.addEventListener('keyup', updateInputVal);
submit.addEventListener('click', handleSubmit);
