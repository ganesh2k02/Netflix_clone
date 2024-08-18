import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMY-1qS-X9Zu3DII1oG6ig3XW7v0eIjlE",
  authDomain: "netflix-clone-react-aa07b.firebaseapp.com",
  projectId: "netflix-clone-react-aa07b",
  storageBucket: "netflix-clone-react-aa07b.appspot.com",
  messagingSenderId: "423251450606",
  appId: "1:423251450606:web:27eea948c6f05d750cf1ff",
  measurementId: "G-PE3NXXVE9R"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth =  getAuth(app);

