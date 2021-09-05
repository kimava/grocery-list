import React from 'react';
import AddForm from './add_form';
import Item from './item';

const ShopList = ({
  list,
  handleAdd,
  handleCheckbox,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div>
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
      <AddForm handleAdd={handleAdd} />
    </div>
  );
};

export default ShopList;
