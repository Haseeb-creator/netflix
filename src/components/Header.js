import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO, USER_AVATAR } from '../utils/constants';
const Header = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const user = useSelector(store => store.user)



	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
				navigate('/browse')
			} else {
				dispatch(removeUser())
				navigate('/')
			}
		});
		// eslint-disable-next-line
	}, [])

	const handleSignOut = () => {
		signOut(auth).then(() => {
		}).catch((error) => {
			navigate('/error')
		});
	}

	return (
		<div className='flex absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-10 justify-between'>
			<img className='w-52' src={LOGO} alt="logo" />

			{user && (<div className='flex items-center p-5'>
				<img src={user ? user.photoURL : USER_AVATAR} className='w-10 h-10 m-4' alt="userIcon" />
				<button type="button" onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
			</div>
			)}
		</div>
	)
}

export default Header