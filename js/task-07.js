const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('change', onFontSizeChange);
function onFontSizeChange(event) {
  textEl.style = `font-size: ${event.currentTarget.value}px;`;
}
