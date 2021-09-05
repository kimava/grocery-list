import React, { useRef } from 'react';
import styles from './add_form.module.css';

const AddForm = ({ handleAdd }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    value && handleAdd(value);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input ref={inputRef} type='text' className={styles.input} />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
};

export default AddForm;
