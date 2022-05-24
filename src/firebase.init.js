
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJEC_TID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    // appId: process.env.REACT_APP_APPID

    apiKey: "AIzaSyAUxrsxuLYSjcGlFOzvaYehAbqzuk-mOho",
    authDomain: "woodwork-tools.firebaseapp.com",
    projectId: "woodwork-tools",
    storageBucket: "woodwork-tools.appspot.com",
    messagingSenderId: "1000709276251",
    appId: "1:1000709276251:web:0487272a329ba9287e357e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;