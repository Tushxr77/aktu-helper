import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYZE0-NQNSe4LigTXxodLp93dYBJiIPkU",
  authDomain: "aktu-helper.firebaseapp.com",
  projectId: "aktu-helper",
  storageBucket: "aktu-helper.firebasestorage.app",
  messagingSenderId: "304474397880",
  appId: "1:304474397880:web:3b131dc2534ace8561e84d",
};

const app = initializeApp(firebaseConfig);

export default app;