function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const colorValueEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const onBtnClick = event => {
  bodyEl.style = `background-color: ${getRandomHexColor()};`;
  colorValueEl.textContent = getRandomHexColor();
};
btnEl.addEventListener('click', onBtnClick);
