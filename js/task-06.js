const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
  if (+inputEl.dataset.length === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
inputEl.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputEl.removeAttribute('class');
}
inputEl.addEventListener('focus', onInputFocus);
