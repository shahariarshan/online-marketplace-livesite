import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../config/Firebase.config";
import axios from "axios";




export const AuthContext =createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [isLoading,setIsLoading]=useState(true)
    


    

    const createUser =(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const login =(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const googleSign = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)

            .then(result => {
                console.log(result.user)
               
            })
            .catch(error => {
                console.error(error)
            })
    }

    const logOut =()=>{
        setIsLoading(true)
        return signOut(auth);
    }
    const updateUser =(name,photo)=>{
        return updateProfile (auth.currentUser,{
            displayName:name,photoUrl:photo
        })
    }
    useEffect(()=>{
        const subscribe =onAuthStateChanged(auth, (currentUser) => {
            const loggedEmail = currentUser?.email || user?.email
            const loggedUser ={email: loggedEmail.email}
            setUser(currentUser)
        setIsLoading(false)
        if(currentUser){
           
            axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
            .then(res =>{
                console.log(res.data);
            })
        }
        else{
            axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
            .then(res =>{
                console.log(res.data);
            })
        }


        });

        return()=>{
            return subscribe()
        }
    },[])

    const values={
        user,
        isLoading,
        createUser,
        login,
        googleSign,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;