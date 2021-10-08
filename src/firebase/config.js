import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence  }
from 'firebase/firestore'
const error = ref('')

const firebaseConfig = {
  apiKey: "AIzaSyCemroWWJWIn_pkns2efSBa2ReHa4QxdhU",
  authDomain: "enquete-quantitative-seg.firebaseapp.com",
  projectId: "enquete-quantitative-seg",
  storageBucket: "enquete-quantitative-seg.appspot.com",
  messagingSenderId: "618417330470",
  appId: "1:618417330470:web:714c7ceabcd31c3c6c49e7"
};
// init firebase
const firebase = initializeApp(firebaseConfig)
//init firestore
const db = getFirestore(firebase)
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          error.value = "Le mode offline n'est pas prise encharge avec multiple onglets ouvert de l'application, fermer les autres onglet sur lesquels l'application est ouverte !"
          alert(error.value)
          console.log(error.value)
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          error.value = "Votre navigateur ne supporte pas le mode offline, utilisé plutôt Firefox, Chrome ou Safari"
          alert(error.value)
          console.log(error.value)
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  })
export  { db, error }
