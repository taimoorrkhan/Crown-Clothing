import React, { useState } from 'react'
import {createAuthUserWithEmailAndPassword } from '../../utils/firebase/Firebase'
import FormInput from '../FormInput/FormInput'
import './SignUpStyles.scss'
import MyButton from '../Button/MyButton';
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createAuthUserWithEmailAndPassword(user, { displayName })
      resetFormFields();
    }
    catch (error) {
      switch (error.code)
      {
        case 'auth/wrong-password':
          alert("auth/wrong-password");
          break;
        case 'auth/user-not-found':
          alert("auth/user-not-found");
          break;
        default:
          alert(error)

      }
    }

    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='sign-up-container' >
      <h2>Dont Have and Account</h2>
			<span>Sign Up with Emain and Password</span>
			<form onSubmit={handleSubmit}>
		
        <FormInput
          label={'Display Name'}
          name='displayName'
					type="text"
					required
					
					onChange={handleChange}
					value={displayName}
				/>
			
        <FormInput
          label={'Email'}
          name='email'
					type="email"
					required
				
					onChange={handleChange}
					value={email}
				/>
			
        <FormInput
          label={'Password'}
          name='password'
					type="password"
					required
				
					onChange={handleChange}
					value={password}
				/>
		
        <FormInput
          label={'Confirm Password'}
          name='confirmPassword'
					type="password"
					required
			
					onChange={handleChange}
					value={confirmPassword}
				/>
        <MyButton type='submit'>Sign Up</MyButton>
        
			</form>
		</div>
  );
}
