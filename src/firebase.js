import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
   apiKey: "AIzaSyAOf5FXCxPTjYISyNmg9gOVEVFdj9XbqsM",
   authDomain: "clone-5092a.firebaseapp.com",
   databaseURL: "https://clone-5092a.firebaseio.com",
   projectId: "clone-5092a",
   storageBucket: "clone-5092a.appspot.com",
   messagingSenderId: "1039692169686",
   appId: "1:1039692169686:web:bb5018ea257dc89944a477"
 
})

const auth=firebase.auth()

export { auth}