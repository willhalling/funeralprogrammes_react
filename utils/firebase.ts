import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDnZH7gMUdw6CCVTnz5bde9KJSt82f-nfE',
  authDomain: 'funeral-programmes.firebaseapp.com',
  projectId: 'funeral-programmes',
  storageBucket: 'funeral-programmes.appspot.com',
  messagingSenderId: '418950795775',
  appId: '1:418950795775:web:dfee61df5d9d2c246dd7ca',
}
if (!firebase.apps.length) {
  initializeApp(firebaseConfig)
}

const firestore = getFirestore()

// export utils/refs
export { firestore }
