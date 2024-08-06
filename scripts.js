document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('dynamic-header');
    const messages = [
        'Check Out My Latest Projects!',
        'Learn More About Me!',
        'Feel Free to Contact Me!',
        'Explore My Work!',
        'Welcome to My Portfolio!'
    ];

    let currentIndex = 0;

    function updateHeader() {
        header.style.opacity = 0; // Fade out
        setTimeout(() => {
            header.textContent = messages[currentIndex];
            currentIndex = (currentIndex + 1) % messages.length;
            header.style.opacity = 1; // Fade in
        }, 500); // 0.5s fade-out duration
    }

    setInterval(updateHeader, 5000); // Change text every 5 seconds
});
