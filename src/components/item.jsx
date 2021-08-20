import React from 'react';
import styles from './item.module.css';

const Item = ({
  item,
  handleCheckbox,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  const onToggle = () => {
    handleCheckbox(item);
  };

  const onPlus = () => {
    handleIncrement(item);
  };

  const onMinus = () => {
    handleDecrement(item);
  };

  const onDelete = () => {
    handleDelete(item);
  };

  return (
    <li>
      <input type='checkbox' className={styles.input} onClick={onToggle} />
      <label>{item.item}</label>
      <button onClick={onMinus}>
        <i className='fas fa-minus-circle'></i>
      </button>
      <span>{item.count}</span>
      <button onClick={onPlus}>
        <i className='fas fa-plus-circle'></i>
      </button>
      <button onClick={onDelete}>
        <i className='fas fa-times'></i>
      </button>
    </li>
  );
};

export default Item;
