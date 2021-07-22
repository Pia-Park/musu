import React, { useState, useEffect } from 'react'
import "./Shop.css"
import ShopBox from './ShopBox';



function Shop() {

	//top
	const [topItems, setTopItems] = useState([]);
	const [topVisible, setTopVisible] = useState(0);
	const [topIsOpen, setTopIsOpen] = useState(false);

	const topHandleClick = () => setTopIsOpen(!topIsOpen);
	const topShowMoreItems = () => {
		setTopVisible((prevValue) => prevValue + 4);
	}
	const topHandleClose = () => setTopVisible(0);

	//middle
	const [middleItems, setMiddleItems] = useState([]);
	const [middleVisible, setMiddleVisible] = useState(0);
	const [middleIsOpen, setMiddleIsOpen] = useState(false);

	const middleHandleClick = () => setMiddleIsOpen(!middleIsOpen);
	const middleShowMoreItems = () => {
		setMiddleVisible((prevValue) => prevValue + 4);
	}
	const middleHandleClose = () => setMiddleVisible(0);

	//bottom
	const [bottomItems, setBottomItems] = useState([]);
	const [bottomVisible, setBottomVisible] = useState(0);
	const [bottomIsOpen, setBottomIsOpen] = useState(false);

	const bottomHandleClick = () => setBottomIsOpen(!bottomIsOpen);
	const bottomShowMoreItems = () => {
		setBottomVisible((prevValue) => prevValue + 4);
	}
	const bottomHandleClose = () => setBottomVisible(0);

	//there is no middle and bottom items now
	useEffect(() => {
		fetch(`${process.env.PUBLIC_URL}/baseFakeData.json`)
			.then((res) => res.json())
			.then((data) => setTopItems(data.items))
	}, [])


	return (
		<section>
			<div className="shop-container" id="shop">
				<div className="shop-wrapper">
					<h2 className="shop-title">Online Shop</h2>
					<ShopBox image="shop-taimakazari.png" handleClick={topHandleClick} handleClose={topHandleClose} showMoreItems={topShowMoreItems} isOpen={topIsOpen} items={topItems} visible={topVisible}
					children="古来より「大麻」は水でも塩でも祓い清められない罪穢れ（氣枯れ）を祓い清める強力な力があるとされています。「麻」は神様のしるし、神様の宿る神聖な繊維とされ飾っていただくと場のエネルギーを見守り「氣」を整えてくれるでしょう。"/>

					<ShopBox image="shop-okou.png" handleClick={middleHandleClick} handleClose={middleHandleClose} showMoreItems={middleShowMoreItems} isOpen={middleIsOpen} items={topItems} visible={middleVisible} />
					
					<ShopBox image="shop-kazarimusubi.png" handleClick={bottomHandleClick} handleClose={bottomHandleClose} showMoreItems={bottomShowMoreItems} isOpen={bottomIsOpen} items={topItems} visible={bottomVisible} />

				</div>
			</div>
		</section>
	)
}

export default Shop
