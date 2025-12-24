import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Letter = () => {

    useEffect(() => {
        // Petals Logic
        const petalsContainer = document.getElementById('petals-container');
        const createPetal = () => {
            if (petalsContainer) {
                const petal = document.createElement('div');
                petal.classList.add('petal');
                petal.innerHTML = '<i class="fa-solid fa-heart"></i>';
                petal.style.left = Math.random() * 100 + 'vw';
                petal.style.animationDuration = (Math.random() * 8 + 10) + 's';
                petal.style.opacity = Math.random() * 0.4 + 0.3;
                petal.style.animationDelay = Math.random() * 5 + 's';
                petalsContainer.appendChild(petal);
                setTimeout(() => petal.remove(), 18000);
            }
        };
        const interval = setInterval(createPetal, 700);
        return () => clearInterval(interval);
    }, []);

    const triggerConfetti = () => {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 },
            colors: ['#E6007A', '#FFD700', '#FFFFFF', '#FF85C0']
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
            <div id="petals-container"></div>

            <Link to="/" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Back
            </Link>

            <main id="letter-container" style={{ display: 'block' }}>
                <div className="letter-paper">
                    <div className="seal"><i className="fa-solid fa-heart"></i></div>
                    <h2>Just a few words, but all from the heart.✨</h2>
                    <p className="letter-body">
                        My Dearest Frnd,
                        <br /><br />
                        Today feels special, not just because it’s your birthday, but because it celebrates you. I’ve been thinking about what to say, and I realized that some feelings don’t need perfection, they just need honesty.
                        <br /><br />
                        There’s something about you that makes everything feel a little softer and brighter. Your smile, your presence, the way you carry yourself, it stays with me longer than I expect. You have this quiet magic that turns ordinary moments into something meaningful, and I truly admire that about you.
                        <br /><br />
                        On your birthday, I just want you to know how special you are. You deserve happiness that feels natural, love that feels gentle, and dreams that come true one by one. I hope this year brings you peace, confidence, laughter, and moments that make your heart feel full.
                        <br /><br />
                        I’m really grateful that you exist, and even more grateful that I get to wish you today. If this letter makes you smile even a little, then it has done exactly what I hoped it would.
                        <br /><br />
                        Take care of yourself. And don’t forget, someone out there thinks of you a little more than you realize.
                        <br /><br />
                        I hope you have a great birthday!
                        <br /><br />
                        Advance Many More Happy Returns Of the Day And Happiest Birthday To You!
                        <br /><br />
                        Take care of yourself, always.
                    </p>
                    <p className="signature">
                        Adithya,<br />
                    </p>
                </div>

                <div className="button-container">
                    <button className="confetti-button" onClick={triggerConfetti}>
                        <i className="fa-solid fa-gift"></i> Send a Shower of Love!
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Letter;
