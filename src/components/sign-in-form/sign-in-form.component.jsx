
import { useState } from "react";

import {
  signInWithGooglePopup,
  
  signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.style.scss";
import Button ,{ BUTTON_TYPE_CLASSES} from "../buttons/button.component";




const defaultFormField = {
  email: "",
  password: "",
};

// Main Component
export default function SignInForm() {

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

 


  const resetFormFields = () => {
    setFormField(defaultFormField);
  };


  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const SignInWithGoogle = async () => {
     await signInWithGooglePopup();
  
   
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
       await signInAuthWithEmailAndPassword(email, password)
      
      // console.log(user)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-pasword':
          alert('incorrect  password for email')
          break
        case 'auth/user-not-found':
          alert('no user found')
          break
        default:
          console.log(error)
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handelChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handelChange}
          value={password}
        />
        <div className="buttons-container">

          <Button buttonType={"invert"} type="submit">
            Sign In
          </Button>

          <Button buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
