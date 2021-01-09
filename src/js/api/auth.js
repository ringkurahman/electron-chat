import firebase from "firebase/app"
import 'firebase/auth'
import db from '../db/firestore'



// Create user profile on firestore
const createUserProfile = userProfile =>
    db
        .collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile)


// Register new user
export async function register({ email, password, username, avatar }) {
    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
        await createUserProfile({ uid: user.uid, username, email, avatar, joinedChats: []})

    } catch (error) {
        return Promise.reject(error.message)
    }
}


// Login user
export const login = ({ email, password }) => firebase.auth().signInWithEmailAndPassword(email, password)


// Logout user
export const logout = () => firebase.auth().signOut()


// Manage logged in and logged out state
export const onAuthStateChanges = onAuth =>
    firebase.auth().onIdTokenChanged(onAuth)

