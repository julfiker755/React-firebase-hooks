import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDjnpPGXdsbl5sMa1j2oYcd_rofPgIUV_4",
    authDomain: "authentication-fast-project.firebaseapp.com",
    projectId: "authentication-fast-project",
    storageBucket: "authentication-fast-project.appspot.com",
    messagingSenderId: "933486352812",
    appId: "1:933486352812:web:3997d6f1d767588e410209"
  };


  const auth=getAuth(initializeApp(firebaseConfig))

  export default auth;