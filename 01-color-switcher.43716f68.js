!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},e=null;function n(){t.startBtn.disabled?(t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","true")):(t.startBtn.setAttribute("disabled","true"),t.stopBtn.removeAttribute("disabled"))}t.startBtn.addEventListener("click",(function(){n(),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),n()}))}();
//# sourceMappingURL=01-color-switcher.43716f68.js.map
