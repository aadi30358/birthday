document.addEventListener("DOMContentLoaded", function () {

    // --- 1. Cursor Magic Trail ---
    const colors = ['#FFD700', '#004e92', '#009688', '#E6007A', '#FFFFFF'];

    document.addEventListener('mousemove', function (e) {
        if (Math.random() < 0.1) { // Limit number of particles (10% chance per move event)
            createMagicParticle(e.clientX, e.clientY);
        }
    });

    function createMagicParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('magic-particle');

        // Randomize
        const size = Math.random() * 8 + 4; // 4-12px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Add minimal movement
        const xDir = (Math.random() - 0.5) * 20;
        const yDir = (Math.random() - 0.5) * 20;
        particle.style.setProperty('--x', `${xDir}px`);
        particle.style.setProperty('--y', `${yDir}px`);

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // --- 2. Floating Hearts & Feathers Logic (Shared) ---
    // Only init if container exists and is empty
    const heartsContainer = document.getElementById('hearts-container');
    if (heartsContainer && heartsContainer.children.length === 0) {
        // Enriched icons including Peacock Feather (emoji) and Blue Hearts
        const heartIcons = ['❤️', '💖', '🦚', '💙', '✨', '🦚'];

        function createFloatingHearts() {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
                heart.style.opacity = Math.random() * 0.3 + 0.1;
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 20000);
            }, 600); // Slightly adjusted frequency
        }
        createFloatingHearts();
    }

    // --- 3. Background Music Player ---
    // Add audio element if not present
    if (!document.getElementById('bg-music')) {
        const audio = document.createElement('audio');
        audio.id = 'bg-music';
        audio.loop = true;
        // Divine Flute Music
        audio.src = 'https://cdn.pixabay.com/download/audio/2022/03/09/audio_a6639d6756.mp3?filename=meditative-rain-11059.mp3';
        document.body.appendChild(audio);

        const toggleBtn = document.createElement('div');
        toggleBtn.id = 'music-toggle';
        toggleBtn.innerHTML = '<i class="fa-solid fa-music music-note"></i>';
        toggleBtn.title = "Play Divine Music";
        document.body.appendChild(toggleBtn);

        let isPlaying = false;

        toggleBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                toggleBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
                toggleBtn.style.background = 'rgba(0,0,0,0.5)';
                isPlaying = false;
            } else {
                audio.play().catch(e => console.log("Audio play failed:", e));
                toggleBtn.innerHTML = '<i class="fa-solid fa-volume-high music-note"></i>';
                // Use Peacock Teal for active state
                toggleBtn.style.background = 'var(--peacock-teal)';
                isPlaying = true;
            }
        });

        // Try auto-play (might fail due to browser policy)
        audio.play().then(() => {
            isPlaying = true;
            toggleBtn.innerHTML = '<i class="fa-solid fa-volume-high music-note"></i>';
            toggleBtn.style.background = 'var(--peacock-teal)';
        }).catch((e) => {
            console.log("Auto-play prevented:", e);
            isPlaying = false;
        });
    }
});
