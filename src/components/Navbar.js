import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <h1>Ekart</h1>
      <div>
        <img
          className='cart-img'
          src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png'
          alt='cart'
        />
        <span className='cart-item-count'>3</span>
      </div>
    </nav>
  );
};

export default Navbar;
