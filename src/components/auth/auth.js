import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

async function signUp(email, password) {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "\n" + errorMessage)
    }
}

async function signIn(email, password) {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw error;
    }
}

function authStateChanged(user) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Signed in");
        } else {
            console.log("Signed out");
        }
    })
}

export { signUp, signIn, authStateChanged }