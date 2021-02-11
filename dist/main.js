(()=>{"use strict";(function(){const t=document.createElement("div");t.classList.add("header"),document.querySelector(".page").appendChild(t);const e=document.createElement("div");e.id="app-title",e.textContent="To-do List",t.appendChild(e);const o=document.createElement("div");o.classList.add("header-button-container"),t.appendChild(o),["+"].forEach((t=>{const e=document.createElement("div");e.classList.add("button"),e.classList.add("header-button"),e.textContent=t,o.appendChild(e)}))})(),function(){const t=document.createElement("div");t.classList.add("main"),document.querySelector(".page").appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("projects"),document.querySelector(".main").appendChild(t);const e=document.createElement("div");e.classList.add("projects-container"),t.appendChild(e),function(){["Inbox","Projects"].forEach((t=>{const o=document.createElement("div");o.id=`${t.toLowerCase()}-button-container`,o.classList.add("button-container");const d=document.createElement("div");d.id=t,d.classList.add("button"),d.classList.add("project"),d.classList.add("projects-button"),d.classList.add(`button-${t.toLowerCase()}`),d.textContent=t,o.appendChild(d),e.appendChild(o)}));const t=document.createElement("img");t.id="inbox-icon",t.src="images/mail-line.svg",document.getElementById("inbox-button-container").prepend(t);const o=document.createElement("img");o.id="projects-icon",o.src="images/folder-line.svg",document.getElementById("projects-button-container").prepend(o)}(),function(){const t=document.createElement("div");t.classList.add("projects-list"),t.classList.add("hide"),e.appendChild(t)}()}();const t=function(t){const e=document.querySelector(".projects-list");for(;e.firstChild;)e.removeChild(e.firstChild);t.forEach((t=>{if("Inbox"!==t){const e=document.createElement("div");e.id=t,e.classList.add("button"),e.classList.add("project"),e.classList.add(t),e.textContent=t,document.querySelector(".projects-list").appendChild(e)}}));const o=document.createElement("div");o.id="add-project",o.classList.add("button"),o.classList.add("project"),o.classList.add("add-project"),o.textContent="+ Add project",document.querySelector(".projects-list").appendChild(o)},e=(function(){const t=document.createElement("div");t.classList.add("todos"),document.querySelector(".main").appendChild(t);const e=document.createElement("div");e.classList.add("todos-title"),t.appendChild(e);const o=document.createElement("div");o.classList.add("todos-container"),t.appendChild(o);const d=document.createElement("div");d.classList.add("todos-list"),d.textContent="todos list",o.appendChild(d)}(),function(t,e){document.querySelector(".todos-title").textContent=t;const o=e.filter((function(e){if(e.project===t)return!0})),d=document.querySelector(".todos-list");for(;d.firstChild;)d.removeChild(d.firstChild);o.forEach((t=>{const e=document.createElement("div");e.id=`project-todo-${t.index}`,e.classList.add("project-todo");const o=document.createElement("div");o.id=t.index,o.classList.add("todo-title"),o.textContent=t.title,e.appendChild(o);const d=document.createElement("div");d.classList.add("todo-buttons"),e.appendChild(d);const n=document.createElement("div");n.classList.add("todo-button"),n.classList.add("todo-due"),n.textContent=t.dueDate,d.appendChild(n);const c=document.createElement("div");c.id=`priority-${t.index}`,c.classList.add("todo-button"),c.classList.add("todo-priority"),c.textContent=t.priority,"low"===t.priority?c.style.backgroundColor="rgb(100, 200, 200)":"medium"===t.priority?c.style.backgroundColor="rgb(255, 210, 180)":"high"===t.priority&&(c.style.backgroundColor="rgb(240, 150, 150)"),d.appendChild(c),document.querySelector(".todos-list").appendChild(e);const s=document.createElement("div");s.id=`expanded-${t.index}`,s.classList.add("todo-expanded"),s.classList.add("project-todo");const i=document.createElement("div");i.classList.add("todo-description"),i.textContent=t.description,s.appendChild(i);const a=document.createElement("div");a.classList.add("todo-expanded-buttons"),s.appendChild(a);const r=document.createElement("img");r.classList.add("todo-button"),r.src="images/pencil-line.svg",r.classList.add("todo-edit"),a.appendChild(r);const l=document.createElement("img");l.id=`delete-${t.index}`,l.classList.add("todo-button"),l.src="images/delete-line.svg",l.classList.add("todo-delete"),a.appendChild(l),document.querySelector(".todos-list").appendChild(s)}))});class o{constructor(t,e,o,n,c){this.title=t,this.project=e,this.priority=o,this.dueDate=n,this.description=c,this.index=t+d.length}}let d=[];const n=function(t,e,n,c,s){const i=new o(t,e,n,c,s);d.push(i)};n("run","Inbox","medium","25","descrip"),n("do run","Inbox","medium","25","descrip"),n("walk","zufaOjECT","high","23","DESCRIPT"),n("jog","ardfasfuject2","high","23","DESCRIPT"),n("eat food","sfdasruject2","low","23","DESCRIPT"),n("drive car","sfdasruject2","low","23","DESCRIPT");const c=d,s=function(t){return t.map((t=>t.project)).filter(((t,e,o)=>o.indexOf(t)===e)).sort()}(c);let i="Inbox";t(s),e(i,c),function(){const t=document.createElement("div");t.classList.add("modal-container"),document.querySelector(".page").append(t);const e=document.createElement("div");e.classList.add("modal"),t.appendChild(e);const o=document.createElement("div");o.classList.add("modal-message"),o.textContent="Name of project:",e.appendChild(o);const d=document.createElement("input");d.classList.add("modal-input"),d.type="text",e.appendChild(d),e.appendChild(document.createElement("br"));const n=document.createElement("button");n.classList.add("modal-submit"),n.textContent="Create",e.appendChild(n)}(),document.addEventListener("click",(function(o){var n;if(console.log(o.target),o.target.matches("#inbox-button-container")&&(i="Inbox",e(i,c)),(o.target.matches("#projects-button-container")||o.target.matches("#Projects"))&&function(){const t=document.querySelector(".projects-list");t.matches(".hide")?(t.classList.remove("hide"),t.classList.add("show")):(t.classList.remove("show"),t.classList.add("hide"))}(),o.target.matches(".project")&&"Projects"!==o.target.id&&"add-project"!==o.target.id&&(i=o.target.id,e(i,c)),o.target.matches(".todo-title")&&(o.target.matches(".showing")?(document.getElementById(o.target.id).classList.remove("showing"),n=o.target.id,document.getElementById(`expanded-${n}`).classList.remove("show")):(document.getElementById(o.target.id).classList.add("showing"),function(t){document.getElementById(`expanded-${t}`).classList.add("show")}(o.target.id))),o.target.matches(".todo-priority")){const t=function(t){let e;const o=t.slice(9);return d.forEach((t=>{t.index===o&&("low"===t.priority?t.priority="medium":"medium"===t.priority?t.priority="high":"high"===t.priority&&(t.priority="low"),e=t.priority)})),e}(o.target.id);!function(t,e){const o=document.getElementById(t);"low"===e?(o.style.backgroundColor="rgb(100, 200, 200)",o.textContent="low"):"medium"===e?(o.style.backgroundColor="rgb(255, 210, 180)",o.textContent="medium"):"high"===e&&(o.style.backgroundColor="rgb(240, 150, 150)",o.textContent="high")}(o.target.id,t)}if(o.target.matches(".todo-delete")&&function(t){document.getElementById(`project-todo-${t}`).remove(),document.getElementById(`expanded-${t}`).remove()}(function(t){t=t.slice(7);const e=d.map((function(t){return t.index})).indexOf(t);return d.splice(e,1),t}(o.target.id)),o.target.matches(".add-project")?(document.querySelector(".modal-container").classList.add("show-modal"),document.querySelector(".modal-input").focus()):o.target.closest(".modal")||(document.querySelector(".modal-container").classList.remove("show-modal"),document.querySelector(".modal-input").value="",document.querySelector(".modal-input").blur()),o.target.matches(".modal-submit")&&""!==document.querySelector(".modal-input").value){const e=document.querySelector(".modal-input").value;s.push(e),s.sort(),t(s),document.querySelector(".modal-container").classList.remove("show-modal"),document.querySelector(".modal-input").value="",document.querySelector(".modal-input").blur()}})),document.querySelector(".modal-input").addEventListener("keydown",(function(e){if(27===e.keyCode&&(document.querySelector(".modal-container").classList.remove("show-modal"),document.querySelector(".modal-input").value="",document.querySelector(".modal-input").blur()),13===e.keyCode&&""!==document.querySelector(".modal-input").value){const e=document.querySelector(".modal-input").value;s.push(e),s.sort(),t(s),document.querySelector(".modal-container").classList.remove("show-modal"),document.querySelector(".modal-input").value="",document.querySelector(".modal-input").blur()}}))})();