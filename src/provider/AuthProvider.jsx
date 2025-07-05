import { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    // sign in user  with google
    const signInWihtGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // sign in user github
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
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
        signInWihtGoogle,
        user,
        loading,
        signInWithGithub,
        signInWithGithub,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;