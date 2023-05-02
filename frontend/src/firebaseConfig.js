import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtrGGUvuLXtAOZinmjOKBr_gA0HrFsX50",
    authDomain: "arf-auth.firebaseapp.com",
    projectId: "arf-auth",
    storageBucket: "arf-auth.appspot.com",
    messagingSenderId: "812159886339",
    appId: "1:812159886339:web:be38e146a4495a92ffda36",
    measurementId: "G-275MXLZX3B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);