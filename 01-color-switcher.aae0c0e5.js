const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;t.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),d&&(t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled"))})),e.addEventListener("click",(function(){clearInterval(d),d&&(e.setAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled"))}));
//# sourceMappingURL=01-color-switcher.aae0c0e5.js.map