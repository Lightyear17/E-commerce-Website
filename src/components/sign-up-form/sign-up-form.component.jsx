import React, { useContext } from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.style.scss'
import Button from '../buttons/button.component'




const defaultFormField ={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}
export default function SignUpForm() {

    const [formField,setFormField] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formField

   

    const resetFormFields = ()=>{
        setFormField(defaultFormField)
    }
    const  handelChange =(event) =>{
          const {name,value} = event.target
          setFormField({...formField,[name]:value})
    }

    const handelSubmit = async (event)=>{
      event.preventDefault()

      if(password !== confirmPassword)
        {
          alert("Password do not match")
          return
        }

        try{
          const {user} = await createAuthUserWithEmailAndPassword(email,password)

           
           await createUserDocumentFromAuth(user,{displayName})

           resetFormFields()
        }
        catch(error){
          if(error.code === "auth/email-already-in-use"){
            alert("Email already in use")
          }
          else{

            console.log("User Create encounter an error", error)
          }
        }



    }

  return (
   <div className='sign-up-container'>
    <h2>Don't have an account? </h2>
     <span>Sign up with your email and password</span>
     <form action="" onSubmit={handelSubmit}>
       
        <FormInput  label="Display Name" type='text' required onChange={handelChange} name='displayName' value={displayName}/>

        
        <FormInput label="Email" type='email' required name='email' onChange={handelChange} value={email}/>

        
        <FormInput label="Password" type='password' required  name='password' onChange={handelChange} value={password}/>

        
        <FormInput  label="Confirm Password" type='password' required name='confirmPassword' onChange={handelChange} value={confirmPassword}/>

            <Button  buttonType="invert"  type='submit'>Sign up</Button>
     </form>
   </div>
  )
}
