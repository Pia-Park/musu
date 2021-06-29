import React, { useState } from 'react'
import "./Navbar.css"
import { MemoryRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link";


function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false)


	return (
		<>
			<nav className="navbar">
				<MemoryRouter>

					<div className="navbar-container">
						<HashLink smooth to="/" className="navbar-logo" >musu<i className="fab fa-typo3" />
						</HashLink>
						<div className="menu-icon" onClick={handleClick}>
							<i className={click ? "fas fa-times" : "fas fa-bars"} />
						</div>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<HashLink smooth to="#home" onClick={closeMobileMenu} className="nav-links">
									Home
							</HashLink>
							</li>
							<li className="nav-item">
								<HashLink smooth to="#about" onClick={closeMobileMenu} className="nav-links">
									About
							</HashLink>
							</li>
							<li className="nav-item">
								<HashLink smooth to="#online-shop" onClick={closeMobileMenu} className="nav-links">
									Online Shop
							</HashLink>
							</li>
							<li className="nav-item">
								<HashLink smooth to="#contact" onClick={closeMobileMenu} className="nav-links">
									Contact
							</HashLink>
							</li>
						</ul>
					</div>
				</MemoryRouter>
			</nav>
		</>
	)
}

export default Navbar
