import React from 'react';
import Item from './item';

const ShopList = ({
  list,
  handleCheckbox,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  console.log(list);
  return (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleCheckbox={handleCheckbox}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ShopList;
