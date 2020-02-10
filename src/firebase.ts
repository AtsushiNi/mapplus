import * as firebase from 'firebase/app'
import 'firebase/auth'
import { env } from '../env'

const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mapplus-25204.firebaseapp.com",
  databaseURL: "https://mapplus-25204.firebaseio.com",
  projectId: "mapplus-25204",
  storageBucket: "mapplus-25204.appspot.com",
  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:936880678508:web:4d0ebd14acdb0e29e55a49",
  measurementId: "G-BV570WRDX1"
};

// Initialize Firebase
export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig)
  console.log('initialize firebase')
}

export default firebase
