const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.setAttribute("disabled","true"),t.stopBtn.removeAttribute("disabled","true")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled","true"),t.stopBtn.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.b33e0899.js.map
