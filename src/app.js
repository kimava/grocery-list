import React, { useState } from 'react';
import './app.css';
import Header from './components/header';
import ShopList from './components/shop_list';

function App() {
  const [list, setList] = useState([
    { id: 1, item: 'sugar', count: 1, checked: false },
  ]);

  function handleCheckbox(selected) {
    const updated = list.map((listitem) => {
      if (listitem.id === selected.id) {
        return { ...selected, checked: !selected.checked };
      }
      return updated;
    });
    setList(updated);
  }

  function handleIncrement(selected) {
    const updated = list.map((listitem) => {
      if (listitem.id === selected.id) {
        return { ...selected, count: selected.count + 1 };
      }
      return updated;
    });
    setList(updated);
  }

  function handleDecrement(selected) {
    const updated = list.map((listitem) => {
      if (listitem.id === selected.id) {
        const count = selected.count - 1;
        return { ...selected, count: count < 1 ? 1 : count };
      }
      return updated;
    });
    setList(updated);
  }

  function handleDelete(selected) {
    const updated = list.filter((listitem) => listitem.id !== selected.id);
    setList(updated);
  }

  return (
    <div>
      <Header />
      <ShopList
        list={list}
        handleCheckbox={handleCheckbox}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
