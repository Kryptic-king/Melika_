document.querySelector('.yes-btn').addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {  // Increase the number of hearts for more immersion
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.querySelector('.hearts-container').appendChild(heart);

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${4 + Math.random() * 2}s`;  // Slightly slower floating for effect
    heart.style.opacity = Math.random() + 0.5;

    setTimeout(() => {
        heart.remove();
    }, 6000);  // Hearts stay a little longer
}
