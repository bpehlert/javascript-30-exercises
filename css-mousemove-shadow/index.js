const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');
const walk = 50;

function moveShadow (e) {
   let {offsetX: x, offsetY: y} = e;
   const {offsetHeight: height, offsetWidth: width} = hero;
   
   if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;            
   }

   const xWalk = Math.round((x / width * walk) - (walk / 2));
   const yWalk = Math.round((y / height * walk) - (walk / 2));

   h1.style.textShadow = `
     ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
     ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
     ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
     ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
   `;
   
}

hero.addEventListener("mousemove", moveShadow);