import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCw7jVrmUpuDMOdzhAlB74ExFqGD__KUbM',
  authDomain: 'cart-860f3.firebaseapp.com',
  projectId: 'cart-860f3',
  storageBucket: 'cart-860f3.appspot.com',
  messagingSenderId: '842667802090',
  appId: '1:842667802090:web:6b52e7dc282583cc538693',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
