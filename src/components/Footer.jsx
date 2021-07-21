import React from 'react'
import "./Footer.css"
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
	return (
		<section className="footer-wrapper">
			<div className="footer-container">
				<h3>musu</h3>
				<ul className="footer-links">
					<li className="footer-link">Home</li>
					<li className="footer-link">About</li>
					<li className="footer-link">Shop</li>
					<li className="footer-link">Contact</li>
				</ul>
			</div>
			<h3 className="copywrite">copywrite@footer information part desu</h3>


		</section>
	)
}

export default Footer
