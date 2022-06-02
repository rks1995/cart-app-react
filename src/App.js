import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';

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
      // reading data just once
      // const productsCol = collection(db, 'products');
      // const productsSnapshot = await getDocs(productsCol);
      // const productList = productsSnapshot.docs.map((doc) => {
      //   return { ...doc.data(), id: doc.id };
      // });

      //onSnapshot is used for realtime update-> if any changes reflects in firestore, it immediately reflects the change
      const docRef = collection(db, 'products');
      // const q = query(docRef, where('price', '==', 699));
      const q = query(
        docRef,
        where('price', '>=', 99),
        orderBy('price'),
        limit(3)
      );
      const unsub = onSnapshot(q, (snapshot) => {
        let products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        this.setState({ products: products, loading: false });
      });
    };
    getProducts(db);
  }

  // ================== Adding product into the firebase store ================= //
  addProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        title: 'Fridge',
        qty: 1,
        price: 1999,
        img: '',
      });
      console.log('document added successfully with ref: ', docRef);
    } catch (error) {
      console.log('Error in adding product', error);
    }
  };

  // ================== Handle Increase Quantity (update) ================= //
  HandleIncreaseQuantity = async (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    const docRef = doc(db, 'products', products[index].id);

    await updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
  };

  // ================== Handle Decrease Quantity (update) ================= //
  HandleDecreaseQuantity = async (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].qty === 0) return;

    const docRef = doc(db, 'products', products[index].id);

    await updateDoc(docRef, {
      qty: products[index].qty - 1,
    });
  };

  // ================== Deleting product from firebase ================= //
  HandleDelete = async (product) => {
    const productId = product.id;
    console.log(productId);
    await deleteDoc(doc(db, 'products', productId));
  };

  // ================== get total price of the products ================= //
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
        <button onClick={this.addProduct}>Add a product</button>
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
