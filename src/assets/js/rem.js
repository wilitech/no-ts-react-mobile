setRem()

window.onresize = function () {
  setRem() 
}

function setRem() {
  const ww = window.innerWidth,
        docEl = window.document.documentElement,
        FontSize = .1 * ww
  docEl.style.fontSize = FontSize + 'px';
}