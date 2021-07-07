import React, { useState } from 'react'
import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);


	return (
		<>
			<nav className="navbar">

					<div className="navbar-container">
						<AnchorLink href="/" className="navbar-logo" >musu<i className="fab fa-typo3" />
						</AnchorLink>
						<div className="menu-icon" onClick={handleClick}>
							<i className={click ? "fas fa-times" : "fas fa-bars"} />
						</div>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<AnchorLink href="#home" onClick={closeMobileMenu} className="nav-links">
									Home
							</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink href="#about" onClick={closeMobileMenu} className="nav-links">
									About
							</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink href="#shop" onClick={closeMobileMenu} className="nav-links">
									Online Shop
							</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink href="#contact" onClick={closeMobileMenu} className="nav-links">
									Contact
							</AnchorLink>
							</li>
						</ul>
					</div>
			</nav>
		</>
	)
}

export default Navbar
