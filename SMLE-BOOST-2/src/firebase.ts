import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBIzLBOxA-buFMamfl8ZOgbTEMes43gQk4",
  authDomain: "industrial-silo-412407.firebaseapp.com",
  databaseURL: "https://industrial-silo-412407-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "industrial-silo-412407",
  storageBucket: "industrial-silo-412407.appspot.com",
  messagingSenderId: "648948539884",
  appId: "1:648948539884:web:2694cdf24ca47e2a3420c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };