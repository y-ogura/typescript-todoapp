import firebase from 'firebase'

class Firebase {
  constructor(config) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }
  signIn (email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export default Firebase
