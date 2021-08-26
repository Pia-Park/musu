import React from "react";
import Items from "./Items";
import "./ItemsContainer.css"
import styled from 'styled-components';



export default function ItemsContainer(props) {
  const { items, gridType, visibleItemsCount } = props;

  const GridItemContainer = styled.div`
          grid-template-columns:repeat(4,1fr);
          grid-template-rows: repeat(${items.slice(0, visibleItemsCount).length / 4},1fr);

          @media screen and (max-width: 785px) {
            grid-template-columns:repeat(2,1fr);

            grid-template-rows: repeat(${Math.round(items.slice(0, visibleItemsCount).length / 2)} , 1fr)
      }
  `

  return (
    <GridItemContainer className="items-container">
      {items.slice(0, visibleItemsCount).map((item) => (
        <Items
          key={item.id}
          id={item.id}
          image={item.url}
          title={item.title}
          price={item.price}
          type={gridType}
        />
      ))}
    </GridItemContainer>
  );
}
