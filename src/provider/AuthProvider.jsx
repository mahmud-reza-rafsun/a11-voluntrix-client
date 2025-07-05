import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    // sign in user  with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with user github
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    // createUserWithEmailPassword
    const createUserWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signInWithEmailPassword
    const signInWithEmailPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // logout user
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(true);
            console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        signInWithGoogle,
        user,
        setUser,
        loading,
        signInWithGithub,
        signInWithGithub,
        signOutUser,
        createUserWithEmailPassword,
        signInWithEmailPassword,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;