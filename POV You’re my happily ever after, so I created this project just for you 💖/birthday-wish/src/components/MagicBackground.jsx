import React, { useEffect, useState, useRef } from 'react';

const MagicBackground = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const heartsRef = useRef(null);

    useEffect(() => {
        // --- 1. Cursor Magic Trail ---
        const colors = ['#FFD700', '#004e92', '#009688', '#E6007A', '#FFFFFF'];

        const handleMouseMove = (e) => {
            if (Math.random() < 0.1) {
                const particle = document.createElement('div');
                particle.classList.add('magic-particle');
                const size = Math.random() * 8 + 4;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;

                const xDir = (Math.random() - 0.5) * 20;
                const yDir = (Math.random() - 0.5) * 20;
                particle.style.setProperty('--x', `${xDir}px`);
                particle.style.setProperty('--y', `${yDir}px`);

                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // --- 2. Floating Hearts ---
        let heartInterval;
        if (heartsRef.current) {
            const heartIcons = ['❤️', '💖', '🦚', '💙', '✨', '🦚'];
            heartInterval = setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
                heart.style.opacity = Math.random() * 0.3 + 0.1;
                heartsRef.current.appendChild(heart);
                setTimeout(() => heart.remove(), 20000);
            }, 600);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (heartInterval) clearInterval(heartInterval);
        };
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Play error", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div id="hearts-container" ref={heartsRef}></div>
            <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/09/audio_a6639d6756.mp3?filename=meditative-rain-11059.mp3"></audio>
            <div id="music-toggle" onClick={toggleMusic} style={{ background: isPlaying ? 'var(--peacock-teal)' : 'rgba(0,0,0,0.5)' }}>
                {isPlaying ? <i className="fa-solid fa-volume-high music-note"></i> : <i className="fa-solid fa-music"></i>}
            </div>
        </>
    );
};

export default MagicBackground;
