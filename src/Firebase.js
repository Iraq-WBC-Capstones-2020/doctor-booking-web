import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDFOSXyLiKe02mshSlwYiYKOQpnjWaW2NU',
  authDomain: 'doctor-booking-81f28.firebaseapp.com',
  databaseURL: 'https://doctor-booking-81f28.firebaseio.com',
  projectId: 'doctor-booking-81f28',
  storageBucket: 'doctor-booking-81f28.appspot.com',
  messagingSenderId: '1001900535989',
  appId: '1:1001900535989:web:6139be47126e7bb432cefc',
  measurementId: 'G-NR1Z21T4K4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
