import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null);



	const dispatch = useDispatch()

	const name = useRef(null)
	const email = useRef(null)
	const password = useRef(null)


	const handleButtonClick = (e) => {
		e.preventDefault()
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (message) return

		if (!isSignInForm) {
			// sign up
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(auth.currentUser, {
						displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/80565984?v=4"
					}).then(() => {
						// Profile updated!
						const { uid, email, displayName, photoURL } = auth.currentUser
						dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

					}).catch((error) => {
						// An error occurred
						setErrorMessage(error.message)
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ' ' + errorMessage)
					// ..
				});
		} else {

			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in 
					/* 	const user = userCredential.user; */
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ' ' + errorMessage)
				});
		}
	}


	const toggleSignUpForm = () => {
		setIsSignInForm(!isSignInForm)
	}
	return (
		<div className=' '>
			<Header />
			<div className='absolute'>
				<img src={BG_URL} alt="bg-img" className='fill-black object-fill' />
			</div>
			<form className='flex-wrap absolute p-12 bg-black w-[350px] my-36 mx-auto right-0 left-0 text-white rounded-lg'>
				<h1 className='font-bold text-4xl my-5'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

				{!isSignInForm && (
					<input type="text" ref={name} autoFocus name="full name" id="name" placeholder='Full Name' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />)}

				<input type="text" ref={email} autoFocus name="email" id="email" placeholder='Email Address' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />

				<input type="password" ref={password} name="Password" id="Password" placeholder='Password' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />

				<p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

				<button type="submit" className='p-3 my-4 bg-[#e50914] w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

				<p className='font-normal cursor-pointer my-3' onClick={toggleSignUpForm}>
					{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}

				</p>
			</form>
		</div>
	)
};

export default Login