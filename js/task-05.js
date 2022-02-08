const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  event.currentTarget.value
    ? (nameOutputEl.textContent = event.currentTarget.value)
    : (nameOutputEl.textContent = 'Anonymous');
}
