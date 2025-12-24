import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reasons = () => {
    const cardsData = [
        {
            text: "I like your smile, it can change the mood of a whole day.",
            icon: "fa-face-smile-beam"
        },
        {
            text: "Some people just make things feel lighter. You’re one of them.",
            icon: "fa-feather"
        },
        {
            text: "You’re someone I’m glad to have in my life.",
            icon: "fa-heart"
        },
        {
            text: "If friendship had a sense of humor, it would look like you.",
            icon: "fa-face-laugh-wink"
        },
        {
            text: "Your kindness and compassion towards everyone.",
            icon: "fa-hand-holding-heart"
        },
        {
            text: "Our endless supply of inside jokes.",
            icon: "fa-face-laugh-squint"
        },
        {
            text: "You inspire me to be better, effortlessly.",
            icon: "fa-arrow-trend-up"
        },
        {
            text: "The energy you pour into everything you do.",
            icon: "fa-fire"
        },
        {
            text: "Because you are perfectly, wonderfully YOU.",
            icon: "fa-heart"
        }
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prev) => (prev + 1) % cardsData.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    return (
        <>
            <Link to="/" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Back
            </Link>

            <main id="reasons-container">
                <h1>Why you’re special to me, and why today matters even more. Happy Birthday 🤍</h1>
                <p>Just a few of the countless reasons...</p>

                <div className="card-stack">
                    {cardsData.map((card, index) => {
                        let className = 'reason-card';
                        if (index === currentCardIndex) {
                            className += ' active';
                        } else if (index === (currentCardIndex + 1) % cardsData.length) {
                            className += ' next';
                        } else if (index === (currentCardIndex - 1 + cardsData.length) % cardsData.length) {
                            className += ' prev';
                        }

                        return (
                            <div key={index} className={className}>
                                <h2>{card.text}</h2>
                                <i className={`fa-solid ${card.icon}`}></i>
                            </div>
                        );
                    })}
                </div>

                <div className="nav-buttons">
                    <button id="prev-btn" onClick={prevCard}><i className="fa-solid fa-arrow-left"></i> Prev</button>
                    <button id="next-btn" onClick={nextCard}>Next <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </main>
        </>
    );
};

export default Reasons;
