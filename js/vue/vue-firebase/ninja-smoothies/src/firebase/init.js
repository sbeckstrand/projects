import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCM1GVKMi1LnhrdiDAcFJ8dE6DQLY8knIc",
  authDomain: "ninja-smoothies-2e837.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-2e837.firebaseio.com",
  projectId: "ninja-smoothies-2e837",
  storageBucket: "ninja-smoothies-2e837.appspot.com",
  messagingSenderId: "336002057475",
  appId: "1:336002057475:web:e395eb79c7ff9a47225536",
  measurementId: "G-WP923QRDHP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
