
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_gYEFCTV67OErVHz5e3dEhmlj_37RmHc",
  authDomain: "tudo-redux-task.firebaseapp.com",
  projectId: "tudo-redux-task",
  storageBucket: "tudo-redux-task.appspot.com",
  messagingSenderId: "891587391133",
  appId: "1:891587391133:web:db301a0f5224c2c075ee74"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth