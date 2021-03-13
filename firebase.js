import firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDrng1i2rPiSn5H7auu4fTI43tcAZPiCGo",
  authDomain: "signal-clone-yt-build-34df2.firebaseapp.com",
  projectId: "signal-clone-yt-build-34df2",
  storageBucket: "signal-clone-yt-build-34df2.appspot.com",
  messagingSenderId: "743812198048",
  appId: "1:743812198048:web:0370b62c55f9d663ac63c5"
};

let app

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}
else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }