import React, { useState, useEffect } from 'react'
import "./Shop.css"


function Shop() {
	const [items, setItems] = useState([]);
	const [visible, setVisible] = useState(0);

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 4);
	}

	useEffect(() => {
		fetch(`${process.env.PUBLIC_URL}/baseFakeData.json`)
			.then((res) => res.json())
			.then((data) => setItems(data.items))
	}, [])


	return (
		<section>
			<div className="shop-container">
				<div className="shop-wrapper">
					<h2 className="title">Online Shop</h2>
					<div >
						<div class="img-box">

							<img src={`${process.env.PUBLIC_URL}/img/newShop1.png`} alt="taimakazari" className="shop-img"
							/>
							<button className="show-item">商品ページを開く</button>
						</div>

						<div className="items-container">
							{items.slice(0, visible).map((item) => (
								<div className="sample3" key={item.item_id}>
									<img src={item.img1_origin} alt="img" />
									<div className="mask">
										<h3 className="caption">{item.title}</h3>
										<h3>{item.price}</h3>
									</div>
								</div>
							))}
						</div>
						<button className="show-more-button" onClick={showMoreItems}>Load more</button>

					</div>




					<div >
						<img src={`${process.env.PUBLIC_URL}/img/shop2.png`} alt="okou" className="shop-img" />
					</div>
					<div >
						<img src={`${process.env.PUBLIC_URL}/img/shop3.png`} alt="kazarimusubi" className="shop-img" />
					</div>

				</div>
			</div>
		</section>
	)
}

export default Shop
