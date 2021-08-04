import React, { Component } from "react";
import '../App.css';
import './HeroSection.css';
import '../components/slick.css';
import "../components/slick-theme.css";



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
			<section className="hero-wrapper" id="home">
					<Slider {...settings}>
						<div>
							<img src={`${process.env.PUBLIC_URL}/img/main-photo.jpg`} alt="hero" className="hero-container"/>
						</div>
						<div>
							<img src={`${process.env.PUBLIC_URL}/img/hero.jpg`} alt="hero" className="hero-container"/>
						</div>
					</Slider>
			</section>
		);
	}
}
