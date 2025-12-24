import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [typewriterText, setTypewriterText] = useState("");
    const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);
    const [flameBlown, setFlameBlown] = useState(false);
    const [instructionText, setInstructionText] = useState("Make a Wish & Tap the Flame! ✨");
    const [smokeActive, setSmokeActive] = useState(false);

    useEffect(() => {
        // Loading Sequence
        const timer1 = setTimeout(() => {
            setLoading(false);
            const timer2 = setTimeout(() => {
                setShowContent(true);
                startTypewriter();
            }, 500);
            return () => clearTimeout(timer2);
        }, 3000);
        return () => clearTimeout(timer1);
    }, []);

    const startTypewriter = () => {
        const text = "My Dearest Frnd,";
        let i = 0;
        const interval = setInterval(() => {
            setTypewriterText(text.substring(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, 150);
    };

    const triggerBirthdayBlast = () => {
        setShowBirthdayPopup(true);
        // Reset state
        setFlameBlown(false);
        setSmokeActive(false);
        setInstructionText("Make a Wish & Tap the Flame! ✨");
    };

    const blowCandle = () => {
        if (!flameBlown) {
            setFlameBlown(true);
            setSmokeActive(true);

            setTimeout(() => {
                setInstructionText("Happy Birthday Sahithi! 🎉");
            }, 500);

            setTimeout(() => {
                fireConfettiBlast();
                setTimeout(() => {
                    setShowBirthdayPopup(false);
                }, 5000);
            }, 1000);
        }
    };

    const fireConfettiBlast = () => {
        var duration = 3000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };
        var themeColors = ['#FFD700', '#004e92', '#009688', '#E6007A', '#FFFFFF'];
        var random = function (min, max) { return Math.random() * (max - min) + min; }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, colors: themeColors, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, colors: themeColors, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        confetti(Object.assign({}, defaults, { particleCount: 200, spread: 160, origin: { y: 0.6 }, colors: themeColors }));
    };

    return (
        <>
            {loading && (
                <div id="loading-screen" style={{ opacity: 1, display: 'flex' }}>
                    <div className="spinner-heart"></div>
                    <p className="loading-text">Unveiling your surprise...</p>
                </div>
            )}

            <div id="main-content" className={showContent ? 'visible' : ''} style={{ display: loading ? 'none' : 'block' }}>
                <img src="/profile_pic.png" alt="Special Photo" className="krishna-img" />
                <h1 id="typewriter-text">{typewriterText}</h1>
                <p>I've created this special place, just for you. ✨</p>

                <div className="nav-links">
                    <Link to="/letter" className="nav-button"><i className="fa-solid fa-envelope"></i> My Letter</Link>
                    <Link to="/reasons" className="nav-button"><i className="fa-solid fa-star"></i> Why I Like You</Link>
                    <button className="nav-button" onClick={triggerBirthdayBlast}><i className="fa-solid fa-cake-candles"></i> Birthday Blast</button>
                </div>
            </div>

            <div id="birthday-popup" className={showBirthdayPopup ? 'active' : ''} onClick={(e) => { if (e.target.id === 'birthday-popup') setShowBirthdayPopup(false) }}>
                <div className="cake-container">
                    <div className="cake">
                        <div className="plate"></div>
                        <div className="layer layer-bottom"></div>
                        <div className="layer layer-middle"></div>
                        <div className="layer layer-top"></div>
                        <div className="icing"></div>
                        <div className="drip drip1"></div>
                        <div className="drip drip2"></div>
                        <div className="drip drip3"></div>
                        <div className="candle">
                            <div className={`flame ${flameBlown ? 'blown' : ''}`} id="flame" onClick={blowCandle}></div>
                            <div className={`smoke ${smokeActive ? 'active' : ''}`} id="smoke"></div>
                        </div>
                    </div>
                </div>
                <div className="instruction-text" id="cake-instruction" style={{ opacity: 1 }}>{instructionText}</div>
            </div>
        </>
    );
};

export default Home;
