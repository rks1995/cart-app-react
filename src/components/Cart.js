import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Phone',
          price: 9999,
          qty: 2,
          img: '',
        },
        {
          title: 'Watch',
          price: 999,
          qty: 3,
          img: '',
        },
        {
          title: 'Laptop',
          price: 25000,
          qty: 1,
          img: '',
        },
      ],
    };
  }

  HandleIncreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  HandleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].qty === 0) return;
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  HandleDelete = (product) => {
    const { products } = this.state;

    const newProduct = products.filter((item) => {
      return item !== product;
    });

    this.setState({ products: newProduct });
  };

  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product, index) => {
          return (
            <CartItem
              product={product}
              key={index}
              onIncreaseQuantity={this.HandleIncreaseQuantity}
              onDecreaseQuantity={this.HandleDecreaseQuantity}
              onDelete={this.HandleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
