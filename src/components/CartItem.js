import React from 'react';
class CartItem extends React.Component {
  render() {
    const { title, price, qty } = this.props.product;
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img
            src='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg'
            style={styles.image}
            alt='img'
          />
        </div>
        <div className='right-block'>
          <div style={styles.font}>{title}</div>
          <div style={styles.color}>Rs {price}</div>
          <div style={styles.color}>Qty: {qty}</div>
          <div className='cart-item-actions'>
            {/* buttons */}
            <img
              src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
              alt='increase'
              className='action-icons'
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
              alt='decrease'
              className='action-icons'
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
              alt='delete'
              className='action-icons'
            />
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  image: {
    width: 210,
    height: 210,
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
