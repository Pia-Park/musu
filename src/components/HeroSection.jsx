import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
	return (
			<img src={`${process.env.PUBLIC_URL}/img/hero.jpg`} alt="hero" className="hero-container"/>

	)
}

export default HeroSection
