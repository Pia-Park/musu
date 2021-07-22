import React , {useState}from 'react'

function ShopBox (props) {
	// const [items, setItems] = useState([]);
	// const [visible, setVisible] = useState(0);
	// const [click, setClick] = useState(false);

	// const handleClick = () => setClick(!click);

	// const showMoreItems = () => {
	// 	setVisible((prevValue) => prevValue + 4);
	// }

	// const handleClose = () => setVisible(0);


	return (
		<div >
						<div class="img-box">

							<img src={`${process.env.PUBLIC_URL}/img/${props.image}`} alt="taimakazari" className="shop-img"
							/>
							<button className="show-item" onClick={props.handleClick} >
								{ props.isOpen ? <div onClick={props.handleClose} >商品ページを閉じる <i className="fas fa-angle-up" /></div> : <div onClick={props.showMoreItems}>商品ページを開く<i className="fas fa-angle-down" /></div>}
							</button>
						</div>

						<div className="items-container">
							{ props.items.slice(0, props.visible).map((item) => (
								<div className="sample3" key={item.item_id}>
									<img src={item.img1_origin} alt="img" />
									<div className="mask">
										<h3 className="caption">{item.title}</h3>
										<h3>{item.price}</h3>
									</div>
								</div>
							))}
						</div>
						{props.items.length > props.visible & props.isOpen ?
							<button className="show-more-button" onClick={props.showMoreItems}>Load more</button> : ""
						}
					</div>
	)
}

export default ShopBox
