import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("observer", currentUser)
            setLoading(false)
        })
        return () => {
            unSubscrive()
        }
    }, [])
    const logout = () => {
        return signOut(auth, currentUser => {
            setUser(currentUser)
        })
    }
    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const info = {
        user,
        createUser,
        singInUser,
        googleUser,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;