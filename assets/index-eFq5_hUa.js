(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const f=document.querySelectorAll(".circular-checkbox"),i=document.getElementById("counter"),k=document.getElementById("add-icon"),d=document.querySelector('input[type="text"].input-newTask'),p=document.querySelector(".taskToComplete-info"),h=document.getElementById("removeAll"),v=document.getElementById("removeCompleted"),m=document.querySelector(".tasks-container");let r=f.length;const g=()=>{i.innerHTML=`${r}`,m.addEventListener("click",o=>{if(o.target.classList.contains("circular-checkbox")){const e=o.target,t=e.nextElementSibling,c=e.getAttribute("aria-checked")==="true";console.log(c),c?(t.classList.remove("completed"),e.classList.remove("completed"),r++,e.setAttribute("aria-checked","false")):(t.classList.add("completed"),e.classList.add("completed"),r--,e.setAttribute("aria-checked","true")),i.innerHTML=`${r}`}})},y=()=>{k.addEventListener("click",()=>{if(d.value.length===0)alert("Insert any text in the input");else{const o=`
                <div class="task-container">    
                  <div class="taskInfo-container">
                    <label for="miCheckbox" class="circular-checkbox" aria-checked="false"></label>
                    <p class="task-description">${d.value}</p>
                    <button class="edit-icon"><i class="fa-solid fa-pen-to-square"></i></i></button>
                    <button class="trash-icon"><i class="fa-solid fa-trash"></i></button>
                  </div>
                </div>
            `;p.insertAdjacentHTML("afterend",o),r++,i.innerHTML=`${r}`,d.value=""}})},L=()=>{m.addEventListener("click",o=>{if(o.target.closest(".trash-icon")){const e=o.target.closest(".task-container"),t=e.previousElementSibling,c=e.querySelector(".circular-checkbox");c.getAttribute("aria-checked")==="false"&&(console.log("xd"),r--),e&&e.remove(),t&&t.tagName==="BR"&&t.remove(),console.log(c),i.innerHTML=`${r}`}})},b=()=>{const o=document.querySelector(".tasks-container");o.addEventListener("click",e=>{const t=o.querySelectorAll(".task-container");e.target===h&&(t.forEach(c=>{c.remove()}),r=0),e.target===v&&document.querySelectorAll('.task-container [aria-checked="true"]').forEach(n=>{n.closest(".task-container").remove()}),i.innerHTML=`${r}`})},a=document.querySelector(".modal-container"),u=a.querySelector(".input-newDescription"),E=()=>{let o;m.addEventListener("click",t=>{(t.target.matches(".edit-icon")||t.target.matches(".fa-pen-to-square"))&&(a.classList.add("show"),o=t.target.closest(".task-container").querySelector(".task-description"),u.focus(),u.value="",a.addEventListener("keydown",e))});const e=t=>{t.key==="Enter"&&(o.textContent=u.value,console.log(o.textContent),a.classList.remove("show"),a.removeEventListener("keydown",e))};a.addEventListener("click",t=>{t.target.matches(".fa-xmark")&&a.classList.remove("show")})};function T(){g(),y(),L(),E(),b()}T();
