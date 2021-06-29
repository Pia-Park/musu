import React from 'react';
import '../App.css';
// import './HeroSection.css';
// import hero from "../../public/img/hero.jpg"

function HeroSection() {
	return (
			<img src={`${process.env.PUBLIC_URL}/hero.jpg`} alt="hero" className="hero-container"/>

	)
}

export default HeroSection
