document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');
    const typewriterElement = document.getElementById('typewriter');

    // The beautiful birthday message
    const message = "My dearest Hira Princess 💕\n\nYou are my Jan, my Cartoon, my Princess — and no words in this world are enough to describe how special you are to me. 👑\n\nEvery single day with you feels like a gift. You make me laugh when I need it the most, you are always there for me, and your smile honestly makes everything brighter. You are not just my best friend — you are a part of my heart. 🌸\n\nOn this beautiful day, 5th August, I want you to know that you are deeply, truly, endlessly loved. You deserve the whole universe, my princess. 🌍✨\n\nHappy Birthday, Hira Jan! 🎂🎉💖\n— Your love, always & forever 🤍";
    
    let isOpened = false;

    // Handle envelope click
    envelope.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;
        
        envelope.classList.add('open');
        
        // Wait for envelope animation to finish before transitioning
        setTimeout(() => {
            welcomeScreen.classList.remove('active');
            
            setTimeout(() => {
                mainScreen.classList.add('active');
                startConfetti();
                // Start typing after screen fade in
                setTimeout(typeWriter, 1200);
            }, 500); // short delay between screens
            
        }, 2000);
    });

    // Typewriter effect
    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            if(message.charAt(i) === '\n') {
                typewriterElement.innerHTML += '<br>';
            } else {
                typewriterElement.innerHTML += message.charAt(i);
            }
            i++;
            // Randomize typing speed slightly for realism
            let typingSpeed = Math.random() * 30 + 30; 
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Advanced Confetti effect using canvas-confetti
    function startConfetti() {
        var duration = 15 * 1000; // 15 seconds of confetti
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            
            // Fire from multiple origins
            confetti(Object.assign({}, defaults, { 
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff9a9e', '#fecfef', '#a1c4fd', '#ff2a71', '#ffd1dc']
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff9a9e', '#fecfef', '#a1c4fd', '#ff2a71', '#ffd1dc']
            }));
        }, 250);
    }
});
