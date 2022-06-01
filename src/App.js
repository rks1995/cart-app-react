import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { collection, onSnapshot } from 'firebase/firestore';

import db from './firebase/config';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: [],
    };
  }

  componentDidMount() {
    // Get a list of products from your database
    const getProducts = async (db) => {
      //getting productList using getDocs
      // const productsCol = collection(db, 'products');
      // const productsSnapshot = await getDocs(productsCol);
      // const productList = productsSnapshot.docs.map((doc) => {
      //   return { ...doc.data(), id: doc.id };
      // });

      //onSnapshot is used for realtime update-> if any changes reflects in firestore, it immediately reflects the change
      const unSub = onSnapshot(collection(db, 'products'), (snapshot) => {
        let products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ products: products, loading: false });
      });
      console.log(unSub);
      // this.setState({ products: productList, loading: false });
    };
    getProducts(db);
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
