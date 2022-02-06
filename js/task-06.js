const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (
    Number(inputEl.getAttribute('data-length')) ===
    event.currentTarget.value.length
  ) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
inputEl.addEventListener('focus', onInputFocus);
function onInputFocus() {
  inputEl.removeAttribute('class');
}
