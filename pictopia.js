!function(){let t=document.createElement("script");t.src="https://code.jquery.com/jquery-3.6.0.min.js",t.type="text/javascript",t.onload=function(){$(document).ready(function(){let t=`
  <style>
    .Pictopia {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      padding: 10px;
    }
    .Pictopia img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s ease-in-out;
    }
    .Pictopia img:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    /* Pictopia Modal CSS */
    .pictopia {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      flex-direction: column;
    }
    .pictopia img {
      max-width: 90%;
      max-height: 60%;
      object-fit: contain;
      border-radius: 10px;
      margin: auto;
      display: block;
      position: relative;
      top: 50%;
      transform: translateY(-50%) scale(1);
      transition: transform 0.4s ease-in-out;
    }
    .pictopia .close, .pictopia .prev, .pictopia .next, .pictopia .zoom-in, .pictopia .zoom-out {
      position: absolute;
      color: white;
      font-size: 30px;
      cursor: pointer;
      z-index: 10000;
    }
    .pictopia .close {
      top: 20px;
      right: 20px;
    }
    .pictopia .prev, .pictopia .next {
      top: 50%;
      transform: translateY(-50%);
    }
    .pictopia .prev {
      left: 30px;
    }
    .pictopia .next {
      right: 30px;
    }
    .pictopia .zoom-in {
      bottom: 50px;
      right: 80px;
    }
    .pictopia .zoom-out {
      bottom: 50px;
      right: 30px;
    }

    /* Thumbnails */
    .thumbnails {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      gap: 10px;
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
      scroll-behavior: smooth;
      padding: 10px;
    }

    .thumbnails::-webkit-scrollbar {
      display: none;
    }
    .thumbnails img {
      width: 100px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 0.5;
      scroll-snap-align: start;
    }
    .thumbnails img.active {
      opacity: 1;
      transform: scale(1.1);
    }
    .thumbnails img:hover {
      transform: scale(1.05);
    }
  </style>
`;$("head").append(t);let i=`
  <div class="pictopia">
    <span class="close">&times;</span>
    <span class="prev">&#10094;</span>
    <img class="pictopia-image" src="" alt="">
    <span class="next">&#10095;</span>
    <span class="zoom-in">+</span>
    <span class="zoom-out">-</span>
    <div class="thumbnails"></div>
  </div>
`;function a(t){let i=t.thumbnail||!1,a=t.displayPerRow||3,o=$(".thumbnails");i?o.show():o.hide();let n=`
            @media (min-width: 768px) {
                .Pictopia {
                    grid-template-columns: repeat(${a}, minmax(200px, 1fr));
                }
            }
        `;$("head").append(`<style>${n}</style>`),function t(i,a){let o=$(`.${i}`);if(0===o.length){console.error("Gallery div not found.");return}let n=[];o.find("img").each(function(){$(this).addClass("gallery-image"),n.push($(this).attr("src"))});let e=0,p=1;function s(){$(".pictopia-image").css("transform",`translateY(-50%) scale(${p})`)}function c(t){p=1,r(t),$(".pictopia-image").animate({opacity:0},400,function(){$(".pictopia-image").attr("src",n[t]),$(".pictopia-image").animate({opacity:1},400)})}function r(t){if(!a)return;let i=$(".thumbnails");i.empty(),n.forEach((a,o)=>{o!==t&&i.append(`<img src="${a}" data-index="${o}" />`)}),i.find("img").each(function(){parseInt($(this).attr("data-index"))===t?$(this).addClass("active"):$(this).removeClass("active")}),i.find("img").click(function(){c(t=parseInt($(this).attr("data-index")))})}o.find("img").click(function(){var t;t=e=n.indexOf($(this).attr("src")),p=1,r(t),$(".pictopia-image").css({opacity:0,transform:"translateY(-50%) scale(0.8)"}),$(".pictopia-image").attr("src",n[t]),$(".pictopia").fadeIn(300,function(){$(".pictopia-image").animate({opacity:1,transform:"translateY(-50%) scale(1)"},400)})}),$(".close").click(function(){$(".pictopia-image").animate({opacity:0,transform:"translateY(-50%) scale(0.8)"},400,function(){$(".pictopia").fadeOut(300)})}),$(".prev").click(function(){c(e=(e-1+n.length)%n.length)}),$(".next").click(function(){c(e=(e+1)%n.length)}),$(".zoom-in").click(function(){p+=.2,s()}),$(".zoom-out").click(function(){p=Math.max(p-.2,.2),s()})}("Pictopia",i)}$("body").append(i),window.Pictopia=a,a({thumbnail:!0})})},document.head.appendChild(t)}();