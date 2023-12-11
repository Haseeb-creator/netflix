import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)

	const toggleSignUpForm = () => {
		setIsSignInForm(!isSignInForm)
	}
	return (
		<div className=' '>
			<Header />
			<div className='absolute fill-black'>
				<img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className='fill-black' srcset="" />
			</div>
			<form className='flex-wrap absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white'>
				<h1 className='font-bold text-4xl my-5'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
				{!isSignInForm && (
					<input type="text" name="full name" id="name" placeholder='Full Name' autoSave='disable' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />)}
				<input type="text" name="email" id="email" placeholder='Email Address' autoSave='disable' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />
				<input type="password" name="Password" id="Password" placeholder='Password' className='p-4 my-2 w-full bg-[#333333] placeholder-[#8c8c8c]' />
				<button type="submit" className='p-3 my-4 bg-[#e50914] w-full rounded-md'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
				<p className='font-normal cursor-pointer my-3' onClick={toggleSignUpForm}>
					{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}

				</p>
			</form>
		</div>
	)
};

export default Login