const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setTime () {
    const now = new Date();

    const seconds = now.getSeconds();   
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60 * 360) + 90;
    const minuteDeg = (minutes / 60 * 360) + 90;
    const hourDeg = (hours / 12 * 360) + 90;

    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minHand.style.transform = `rotate(${minuteDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
};

setInterval(setTime, 1000);
