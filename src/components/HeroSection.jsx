import React, { Component } from "react";
import '../App.css';
import './HeroSection.css';
import "./slick.css";
import "./slick-theme.css";

import Slider from "react-slick";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true,
			autoplaySpeed:3000
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img src={`${process.env.PUBLIC_URL}/img/main-photo.png`} alt="hero" className="hero-container"/>
					</div>
					<div>
					<img src={`${process.env.PUBLIC_URL}/img/hero.jpg`} alt="hero" className="hero-container"/>
					</div>
				</Slider>
			</div>
		);
	}
}
