import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase/config';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: [],
    };
  }

  // Get a list of products from your database
  getProducts = async (db) => {
    const productsCol = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const promise = productsSnapshot.docs.map((doc) => doc.data());
    return promise;
  };

  async componentDidMount() {
    let productList = await this.getProducts(db);
    this.setState({ products: productList, loading: false });

    // this.setState({ products });
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

  getTotalPrice = () => {
    const { products } = this.state;

    let totalPrice = 0;

    products.forEach((product) => {
      const { price, qty } = product;
      totalPrice += price * qty;
    });

    return totalPrice;
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className='App'>
        <Navbar products={products} />

        <Cart
          products={products}
          HandleDecreaseQuantity={this.HandleDecreaseQuantity}
          HandleIncreaseQuantity={this.HandleIncreaseQuantity}
          HandleDelete={this.HandleDelete}
        />
        {loading && <h1>Loading Products...</h1>}
        <Footer getTotalPrice={this.getTotalPrice} />
      </div>
    );
  }
}

export default App;
