import React from 'react';

class CartItem extends React.Component {
  render() {
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img style={styles.image} />
        </div>
        <div className='right-block'>
          <div style={styles.font}>Phone</div>
          <div style={styles.color}>Rs 9999</div>
          <div style={styles.color}>Qty: 1</div>
          <div className='cart-item-actions'>{/* buttons */}</div>
        </div>
      </div>
    );
  }
}

var styles = {
  image: {
    width: 110,
    height: 110,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  font: {
    fontSize: 25,
  },
  color: {
    color: '#777',
  },
};

export default CartItem;
