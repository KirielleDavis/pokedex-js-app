let pokemonRepository=function(){let e=[],t=document.querySelector("#modal-container");function n(t){"object"==typeof t&&"name"in t?e.push(t):console.log("pokemon is not correct")}function i(){return e}function o(e){l(e).then(function(){(function e(n,i,o){t.innerHTML="";let l=document.createElement("div");l.classList.add("modal");let a=document.createElement("button");a.classList.add("modal-close"),a.innerText="Close",a.addEventListener("click",d);let r=document.createElement("h1");r.innerText=n;let s=document.createElement("p");s.innerText=i;let c=document.createElement("img");function d(){t.classList.remove("is-visible")}c.setAttribute("src",o),c.src=o,c.setAttribute("alt",n+" sprite"),l.appendChild(a),l.appendChild(r),l.appendChild(s),l.appendChild(c),t.appendChild(l),t.classList.add("is-visible"),$("#myModal").modal("show"),t.addEventListener("click",e=>{e.target===t&&d()})})(e.name,"Height: "+e.height,e.imageFrontUrl),console.log(e)})}function l(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageFrontUrl=t.sprites.front_default,e.imageBackUrl=t.sprites.back_default,e.order=t.order,e.height=t.height,e.types=t.types,e.abilities=t.abilities}).catch(function(e){console.error("pokemonRepository.loadDetails()|ERROR|"+e),alert("Error while loading Pokemon information :"+e)})}return window.addEventListener("keydown",e=>{"Escape"===e.key&&t.classList.contains("is-visible")&&hideModal()}),{add:n,getAll:i,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),i=document.createElement("li"),l=document.createElement("button");l.innerText=t.name,l.classList.add("button-class"),i.appendChild(l),n.appendChild(i),i.classList.add("pokemon"),l.addEventListener("click",function(e){o(t)})},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){let t={name:e.name,detailsUrl:e.url};n(t),console.log(t)})}).catch(function(e){console.error(e)})},loadDetails:l,showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});