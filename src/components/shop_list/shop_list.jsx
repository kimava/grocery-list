import React from 'react';
import AddForm from '../add_form/add_form';
import Item from '../item/item';
import styles from './shop_list.module.css';

const ShopList = ({
  list,
  handleAdd,
  handleCheckbox,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
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
