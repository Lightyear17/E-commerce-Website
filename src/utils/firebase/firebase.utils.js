import { initializeApp } from "firebase/app";

import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signOut,onAuthStateChanged} from 'firebase/auth'

import { getFirestore, doc, setDoc, getDoc,collection,writeBatch, query,getDocs } from 'firebase/firestore';
// import { getDocs } from "firebase/firestore/lite";



const firebaseConfig = {
    apiKey: "AIzaSyDocLU24sejj9hO_w2lzNM7MqjtJIVKQjQ",
    authDomain: "crwn-clothing-db-11f8d.firebaseapp.com",
    projectId: "crwn-clothing-db-11f8d",
    storageBucket: "crwn-clothing-db-11f8d.appspot.com",
    messagingSenderId: "488115107758",
    appId: "1:488115107758:web:e87948099d970435c97a3f"
  };
  


  // Initialize Firebase
  const firebaseAPP = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

  export const db = getFirestore()


  export const addCollectionAndDocument = async (collectionKey,objectsToAdd) =>{

    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
    })

    await batch.commit()
    console.log("done")
  
  }


  export const getCategoriesAndDocument = async () =>{
      const collectionRef = collection(db,'categories')
      const q = query(collectionRef)

      const querySnapShot = await getDocs(q)
      const categoryMap = querySnapShot.docs.reduce((acc,docSnapshot)=>{
        const {title,items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        // console.log(acc)
        return acc
      },{})
        // console.log(categoryMap)
      return categoryMap 
  }
  

  export const createUserDocumentFromAuth = async (userAuth,additionInfo) =>{
    if(!userAuth) return
    const userDocRef = doc(db,'user',userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists() )
    
    if(!userSnapshot.exists()){
      const {displayName,email} = userAuth
      const createdAt = new Date()
      
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionInfo 
        })
      }catch(error){
        console.log(error)
      }
    }

    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email && !password) return
   return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthWithEmailAndPassword = async(email,password)=>{
    if(!email && !password) return
   return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser =  async () =>  await signOut(auth)

  export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback)