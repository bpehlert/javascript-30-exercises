
const pressedKeys = [];
const secret = 'beniscool';
const reveal = document.createElement('p');
const showSecret = document.querySelector('.secret');
reveal.appendChild(document.createTextNode('👍'));

window.addEventListener('keyup', (e) => {
   if (showSecret.hasChildNodes()) {
      showSecret.removeChild(reveal)
   }
   pressedKeys.push(e.key);
   pressedKeys.splice(-secret.length - 1, pressedKeys.length-secret.length );
   if (pressedKeys.join('') === secret) {
      showSecret.appendChild(reveal)     
   }
});


