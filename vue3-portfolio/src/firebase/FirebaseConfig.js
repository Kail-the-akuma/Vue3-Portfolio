import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: 'AIzaSyCTopEaUJyaIXVPkJYY5B3Wa1NRF2cQouQ',

  authDomain: 'portfolio-8b40b.firebaseapp.com',

  projectId: 'portfolio-8b40b',

  storageBucket: 'portfolio-8b40b.appspot.com',

  messagingSenderId: '1092604355748',

  appId: '1:1092604355748:web:4e3f1d3a6f6281162df231'

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)

export{
  db

}
