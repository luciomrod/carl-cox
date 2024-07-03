document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const squirtleSound = document.getElementById('squirtleSound');
    let isSquirtle = true;

    setInterval(() => {
        message.textContent = isSquirtle ? 'Oh Yes Oh Yes!!!' : '';
        if (isSquirtle) {
            squirtleSound.currentTime = 3.9;
            squirtleSound.play();
        }
        isSquirtle = !isSquirtle;
    }, 1000);
});
