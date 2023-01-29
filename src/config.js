import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCu04b_6YTVJbw99fFwZX9hB9cpo8kzpCY",
  authDomain: "fireship-data-modeling-c-8d283.firebaseapp.com",
  projectId: "fireship-data-modeling-c-8d283",
  storageBucket: "fireship-data-modeling-c-8d283.appspot.com",
  messagingSenderId: "39491144426",
  appId: "1:39491144426:web:3dce985b44f6a015742593",
  measurementId: "G-Q93H97TDPN"
};

const app = await initializeApp(firebaseConfig);
export const db = await getFirestore(app);