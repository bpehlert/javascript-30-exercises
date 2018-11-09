const controls = document.querySelectorAll('.controls input');

function updateStyle () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(control => control.addEventListener('change', updateStyle));
controls.forEach(control => control.addEventListener('mousemove', updateStyle));


