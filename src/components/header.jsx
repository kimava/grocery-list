import React from 'react';

const Header = ({ count, left }) => (
  <div>
    <h1>Shopping List</h1>
    <span>Total {count} items</span>
    <span>{count - left} items left</span>
  </div>
);

export default Header;
<h1>Header</h1>;
