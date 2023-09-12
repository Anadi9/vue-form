// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCSz9O-jTt2bS3bEwoHdEWasdEHfrZZF14',
  authDomain: 'vue-form-d734a.firebaseapp.com',
  projectId: 'vue-form-d734a',
  storageBucket: 'vue-form-d734a.appspot.com',
  messagingSenderId: '789256294762',
  appId: '1:789256294762:web:f104d3cc9797d5c30d1513',
  measurementId: 'G-TPMV9TSFSV'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Get a Firestore instance if you're using Firestore
const db = getFirestore(firebaseApp)

export { db } // Export the Firestore instance
export default firebaseApp