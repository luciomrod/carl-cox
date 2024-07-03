document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const squirtleSound = document.getElementById('squirtleSound');
    let isSquirtle = true;

    setInterval(() => {
        message.textContent = isSquirtle ? 'Squirtle' : '';
        if (isSquirtle) {
            squirtleSound.currentTime = 0;
            squirtleSound.play();
        }
        isSquirtle = !isSquirtle;
    }, 1000);
});
