import '@firebase/firestore'
import '@firebase/storage'
import 'firebase/firestore'

import * as firebase from '@firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDnZH7gMUdw6CCVTnz5bde9KJSt82f-nfE',
  authDomain: 'funeral-programmes.firebaseapp.com',
  projectId: 'funeral-programmes',
  storageBucket: 'funeral-programmes.appspot.com',
  messagingSenderId: '418950795775',
  appId: '1:418950795775:web:dfee61df5d9d2c246dd7ca',
}

const firebaseApp: any = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()
const storage = firebaseApp.storage()

// export utils/refs
export { database, firebase, storage }
