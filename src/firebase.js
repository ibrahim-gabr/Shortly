import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: 'AIzaSyA2bbVfZI83qczrUIkumKg_mviUucGYZb4',
  authDomain: 'shortly-50795.firebaseapp.com',
  databaseURL: 'https://shortly-50795.firebaseio.com',
  projectId: 'shortly-50795',
  storageBucket: 'shortly-50795.appspot.com',
  messagingSenderId: '110217999156',
  appId: '1:110217999156:web:f509d598c8039181daab61',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = firebase.firestore()
