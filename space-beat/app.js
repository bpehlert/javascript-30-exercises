window.addEventListener("keydown", playSound)

// Add event listener to all of the key elements
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(event){
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
        
    if (!sound) return;
    
    key.classList.add("playing")
    sound.currentTime = 0;
    sound.play();
};

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
}


