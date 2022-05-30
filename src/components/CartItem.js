import React from 'react';
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Phone',
      price: 9999,
      qty: 1,
      img: '',
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    // //setState form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    // this.setState({
    //   qty: this.state.qty + 100,
    // });

    //setState form 2-> if prevState is required
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) return;

    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    const { title, price, qty } = this.state;
    console.log('render');
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
              onClick={this.increaseQuantity}
            />
            <img
              src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
              alt='decrease'
              className='action-icons'
              onClick={this.decreaseQuantity}
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
