import { useContext,createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
export const UserContext =createContext({
        currenUser:null,
        setCurrentUser : () =>  null
})


export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}

        useEffect(()=>{
                const unsubscribe = onAuthStateChangedListner((user)=>{
                       setCurrentUser(user)
                       if(user){
                        
                               createUserDocumentFromAuth(user)
                        }
                })

                return unsubscribe
        },[])


            return <UserContext.Provider value={value}>{children}</UserContext.Provider>


}

