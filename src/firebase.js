import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBfYHlifPLdwp5XhdMX-LMkeQwYE5zNelE",
    authDomain: "tesla-clone-90470.firebaseapp.com",
    projectId: "tesla-clone-90470",
    storageBucket: "tesla-clone-90470.appspot.com",
    messagingSenderId: "18716172292",
    appId: "1:18716172292:web:925f7674bef97fc8df5551"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }
