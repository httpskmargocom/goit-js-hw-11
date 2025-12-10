import{a as p,S as d,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="53646537-90648830b558eb0aebf2e1e33",y="https://pixabay.com/api/";async function h(i){return(await p.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.totalHits}const n=document.querySelector(".gallery"),b=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <ul class="info">
        <li><b>Likes:</b> ${t}</li>
        <li><b>Views:</b> ${s}</li>
        <li><b>Comments:</b> ${f}</li>
        <li><b>Downloads:</b> ${m}</li>
        </ul>
        </li>
        `).join("");n.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){n.innerHTML=""}function q(){n.classList.add("loading")}function u(){n.classList.remove("loading")}const c=document.querySelector(".form");c.addEventListener("submit",async i=>{i.preventDefault();const r=c["search-text"].value.trim();if(!r){l.warning({message:"Please enter a search query",position:"topRight"});return}w(),q();try{const o=await h(r);if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u();return}L(o.hits)}catch(o){l.error({message:"Error fetching images",position:"topRight"}),console.error(o)}finally{u()}c.reset()});
//# sourceMappingURL=index.js.map
