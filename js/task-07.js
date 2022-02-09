const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${fontSizeControlEl.value}px`;

fontSizeControlEl.addEventListener('input', onFontSizeChange);
function onFontSizeChange(event) {
  textEl.style = `font-size: ${event.currentTarget.value}px;`;
}
