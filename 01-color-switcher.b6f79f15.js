!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=null;t.addEventListener("click",(function(){(d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))&&(t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled"))})),e.addEventListener("click",(function(){clearInterval(d),d&&(e.setAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled"))}))}();
//# sourceMappingURL=01-color-switcher.b6f79f15.js.map