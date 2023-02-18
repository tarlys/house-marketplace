import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAE8zdTx-ywDnlI9eMxRzipYHi5Ov-FWjI',
  authDomain: 'house-marketplace-aff33.firebaseapp.com',
  projectId: 'house-marketplace-aff33',
  storageBucket: 'house-marketplace-aff33.appspot.com',
  messagingSenderId: '785148497974',
  appId: '1:785148497974:web:e154ac4b85148c23cc0897',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
