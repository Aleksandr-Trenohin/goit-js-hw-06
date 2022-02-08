const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

function onDecrementBtnCLick() {
  counterValue -= 1;

  refs.valueEl.textContent = counterValue;
}
refs.decrementBtn.addEventListener('click', onDecrementBtnCLick);

function onIncrementBtnCLick() {
  counterValue += 1;

  refs.valueEl.textContent = counterValue;
}
refs.incrementBtn.addEventListener('click', onIncrementBtnCLick);
