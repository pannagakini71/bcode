import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
    const features = [
        {
            title: "Speaking Practice",
            description: "Enhance your speaking skills with our expert-led sessions.",
            icon: "🗣️"
        },
        {
            title: "Mock Tests",
            description: "Experience real exam conditions with our comprehensive mock tests.",
            icon: "📝"
        },
        {
            title: "AI Band Score",
            description: "Get instant feedback on your writing and speaking with our AI tools.",
            icon: "🤖"
        },
        {
            title: "Personalized Coaching",
            description: "Receive tailored guidance from experienced instructors.",
            icon: "👩‍🏫"
        }
    ];

    return (
        <div className="feature-cards" id="features">
            <h2>Our Features</h2>
            <div className="cards-container">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;