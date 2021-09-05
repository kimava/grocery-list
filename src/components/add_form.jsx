import React, { useRef } from 'react';

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
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
      <button>Add</button>
    </form>
  );
};

export default AddForm;
