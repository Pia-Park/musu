import React from "react";
import Items from "./Items";


export default function ItemsContainer(props) {
  const { gridType, items, visibleItemsCount } = props;

  const grids = {
    insta: "repeat(4,1fr)",
    base: "repeat(4,1fr)",
  };

  const styles = {
    gridTemplateColumns: `${grids[gridType]}`,
  };

  return (
    <div className="items-container" style={{ ...styles }}>
      {items.slice(0, visibleItemsCount).map((item) => (
        <Items
          key={item.id}
          image={item.url}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}
