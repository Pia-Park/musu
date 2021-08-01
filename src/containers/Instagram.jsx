import React, { useState, useEffect } from 'react'
import { getInstaImages } from '../api/instagramAPI';
import ItemsContainer from '../components/ItemsContainer';

function Instagram() {
	const [items, setItems] = useState([]);
	const VISIBLE_COUNT = 4

	useEffect(() => {
		const getItems = async () => {
			const res = await getInstaImages();
			const items = res.map(item => {
				return {
					id: item.id,
					url: item.media_url,
				}
			})
			setItems(items);
		};
		getItems();

	}, []);

	return (
		<ItemsContainer
			items={items}
			gridType={"insta"}
			visibleItemsCount={VISIBLE_COUNT} />
	);
}

export default Instagram
