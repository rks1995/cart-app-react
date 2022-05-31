import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Phone',
          price: 9999,
          qty: 2,
          img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg',
        },
        {
          title: 'Watch',
          price: 999,
          qty: 3,
          img: 'https://staticimg.titan.co.in/Titan/Catalog/1825KM01_1.jpg?pView=pdp',
        },
        {
          title: 'Laptop',
          price: 25000,
          qty: 1,
          img: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2021/imgs/huawei-matebook-x-pro-2021-kv01.png',
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
      <div className='App'>
        <Navbar products={products} />
        <Cart
          products={products}
          HandleDecreaseQuantity={this.HandleDecreaseQuantity}
          HandleIncreaseQuantity={this.HandleIncreaseQuantity}
          HandleDelete={this.HandleDelete}
        />
      </div>
    );
  }
}

export default App;
