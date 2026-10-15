(function(){'use strict';
function safe(f,n){try{f()}catch(e){console.warn('init falló:',n,e)}}
var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
safe(function(){var s=document.querySelector('.splash');setTimeout(function(){s&&s.classList.add('off')},1200)},'splash');
safe(function(){var els=$('.reveal');if(!('IntersectionObserver'in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.03});
els.forEach(function(e){io.observe(e)});setTimeout(function(){els.forEach(function(e){e.classList.add('in')})},6000)},'reveal');
safe(function(){var im=$('[data-par]'),t=0;function u(){t=0;var h=innerHeight;im.forEach(function(i){var r=i.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var p=(r.top+r.height/2-h/2)/h;i.style.transform='translateY('+(-8+p*-9)+'%)'})}
addEventListener('scroll',function(){t||(t=requestAnimationFrame(u))},{passive:true});u()},'parallax');
safe(function(){var l=$('.rail a'),ch=$('.chapter');addEventListener('scroll',function(){var cur='';ch.forEach(function(c){if(c.getBoundingClientRect().top<innerHeight*.4)cur=c.id});l.forEach(function(a){a.classList.toggle('on',a.dataset.s===cur)})},{passive:true})},'scrollspy');
safe(function(){var lb=document.querySelector('.lb'),im=lb.querySelector('img');$('.g').forEach(function(b){b.addEventListener('click',function(){im.src=b.dataset.src;lb.hidden=false})});
lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true})},'lightbox');
})();
