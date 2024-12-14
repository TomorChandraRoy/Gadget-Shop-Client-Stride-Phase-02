import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../utils/firebaseConfig/FirebaseConfig";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    //# লগ ইন করা ব্যবহারকারীর তথ্য এখানে সঞ্চিত রাখার জন্য 
    const [user, setUser] = useState(null);

    //reload korle login page jeno na jay
    const [loading, setLoading] = useState(true);

    // Google SignUp/Sign 

    const googleProvider = new GoogleAuthProvider();

    //create with Email and Password
    const createAccount = () => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //SignIn with Email and Password
    const signInAccount = ()=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password)
    }

    //LogOut with Email and Password
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    // Google SignUp/Sign 
    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // রিয়েল-টাইম আপডেটের জন্য: লগ ইন বা লগ আউটের সময় সঠিক UI দেখানোর জন্য।
    // Auto Login বাস্তবায়ন করতে: পেজ রিফ্রেশের পরেও ব্যবহারকারী লগ ইন থাকা নিশ্চিত করতে।

    useEffect (() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // লগ ইন থাকা ব্যবহারকারীর তথ্য
                console.log('user state change', currentUser);
            } else {
                setUser(null); // ব্যবহারকারী লগ আউট
            }
            setLoading(false); // স্টেট আপডেট শেষ
        });

        // Cleanup subscription to avoid memory leaks
        return () => unsubscribe();

    },[]);


    const authInfo = { user, createAccount, signInAccount, logOut, googleSign, updateUserProfile }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider