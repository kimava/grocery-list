import React from 'react';
import styles from './item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faPlusCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

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
    <li className={styles.list}>
      <input type='checkbox' className={styles.input} onClick={onToggle} />
      <p className={styles.item}>{item.item}</p>
      <button onClick={onMinus}>
        <FontAwesomeIcon icon={faMinusCircle} className={styles.icon} />
      </button>
      <span className={styles.count}>{item.count}</span>
      <button onClick={onPlus}>
        <FontAwesomeIcon icon={faPlusCircle} className={styles.icon} />
      </button>
      <button onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} className={styles.delete} />
      </button>
    </li>
  );
};

export default Item;
