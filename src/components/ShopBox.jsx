import React from 'react'

function ShopBox(props) {


	return (
		<>
			<div class="img-box">
				<img src={`${process.env.PUBLIC_URL}/img/${props.image}`} alt="taimakazari" className="shop-img"
				/>
				<button className="show-item" onClick={props.handleClick} >
					{props.isOpen ? <div onClick={props.handleClose} >商品ページを閉じる <i className="fas fa-angle-up" /></div> : <div onClick={props.showMoreItems}>商品ページを開く<i className="fas fa-angle-down" /></div>}
				</button>
			</div>
			{props.isOpen ? <div className="shop-detail">{props.children}</div> : ""}

			
			<div className="items-container">
				{props.items.slice(0, props.visible).map((item) => (
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
				<button className="show-more-button" onClick={props.showMoreItems}>もっと見る　<i className="fas fa-angle-down" /></button> : ""
			}
		</>
	)
}

export default ShopBox
