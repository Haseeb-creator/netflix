import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

	const navigate = useNavigate()

	const user = useSelector(store => store.user)

	const handleSignOut = () => {
		signOut(auth).then(() => {
			navigate('/')
		}).catch((error) => {
			navigate('/error')
		});
	}

	return (
		<div className='flex absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-10 justify-between'>
			<img className='w-52' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

			{user && (<div className='flex items-center p-5'>
				<img src={user ? user.photoURL : "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"} className='w-10 h-10 m-4' alt="userIcon" />
				<button type="button" onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
			</div>
			)}
		</div>
	)
}

export default Header