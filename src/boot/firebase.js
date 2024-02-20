// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcC3uX__dB4xgP4JYQraGiHx9i6tt9Y3U",
  authDomain: "twitter-clone-by-azsf.firebaseapp.com",
  projectId: "twitter-clone-by-azsf",
  storageBucket: "twitter-clone-by-azsf.appspot.com",
  messagingSenderId: "259795411631",
  appId: "1:259795411631:web:5a992113ae4b5a3f42ea5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// let db = firebase.firestore();
const db = getFirestore(app);

// Get a list of cities from your database
async function getTweets(db) {
  const tweetsCol = collection(db, "tweets");
  const tweetSnapshot = await getDocs(tweetsCol);
  const tweetList = tweetSnapshot.docs.map((doc) => doc.data());
  return tweetList;
}

export default db;

// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcC3uX__dB4xgP4JYQraGiHx9i6tt9Y3U",
//   authDomain: "twitter-clone-by-azsf.firebaseapp.com",
//   projectId: "twitter-clone-by-azsf",
//   storageBucket: "twitter-clone-by-azsf.appspot.com",
//   messagingSenderId: "259795411631",
//   appId: "1:259795411631:web:5a992113ae4b5a3f42ea5a",
// };

// const app = firebase.initializeApp(firebaseConfig);
// export default db = app.firestore();
