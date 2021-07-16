import React from 'react'
import "./Shop.css"

function Shop() {
	return (
		<section>
			<div className="shop-container">
				<div className="shop-wrapper">
					<div className="shop-img">
						<img src={`${process.env.PUBLIC_URL}/img/shop1.png`} alt="taima"/>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Shop
