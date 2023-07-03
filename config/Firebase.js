import { initializeApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXepK5n0FohlQXD_U9QdNDDoVqP2yyq_M",
  authDomain: "fir-reactnative-3f91f.firebaseapp.com",
  projectId: "fir-reactnative-3f91f",
  storageBucket: "fir-reactnative-3f91f.appspot.com",
  messagingSenderId: "840121208300",
  appId: "1:840121208300:web:314b430dbdeff244b084c9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }