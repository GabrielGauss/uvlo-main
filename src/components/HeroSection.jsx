import React from 'react';
import './HeroSection.css';
import UvloMAIN from '../assets/UVLO-MAIN.png';
import UvloBG from "../assets/bg.png";

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="main-section">
                <img 
                    src={UvloMAIN} 
                    className="logo" 
                    alt="Logo de Último Velo" 
                />
            </div>
        </div>
    );
}

export default HeroSection;
