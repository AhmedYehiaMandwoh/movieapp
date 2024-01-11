import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAqMd8foMxH374v9FJSyAg8inN8rHGIviI",
  authDomain: "interviewapp-78f97.firebaseapp.com",
  projectId: "interviewapp-78f97",
  storageBucket: "interviewapp-78f97.appspot.com",
  messagingSenderId: "593856338214",
  appId: "1:593856338214:web:3a3767f80febba61cb49e7",
  measurementId: "G-6WMYMQ40YR"
}

firebase.initializeApp(config)
const db = firebase.firestore()
export const usersCollection = db.collection('users')