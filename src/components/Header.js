import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const user = useSelector(store => store.user)
	const languageView = useSelector(store => store.gpt.showGptSearch)



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

	const handleGpt = () => {
		dispatch(toggleGptSearchView())
	}

	const handlerLanguage = (e) => {
		e.preventDefault()
		dispatch(changeLanguage(e.target.value))
	}

	return (
		<div className='flex absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-10 justify-between'>
			<img className='w-52' src={LOGO} alt="logo" />
			{user && (<div className='flex items-center p-5'>
				{languageView && <select className='mx-4 font-semibold bg-gray-700 text-white opacity-90 border-2 border-cyan-400 my-2 px-3 py-2 rounded-lg text-black-primary focus:outline-none text-sm' onChange={handlerLanguage}>
					{SUPPORTED_LANGUAGE.map((lng) =>
						<option key={lng.name} value={lng.identifier}  >{lng.name}</option>
					)}
				</select>}
				<button className='py-2 px-4 bg-fuchsia-600 text-white rounded-xl' type="button" onClick={handleGpt}>
					{!languageView ? " GPT Search" : "HomePage"}</button>
				<img src={user ? user.photoURL : USER_AVATAR} className='w-10 h-10 m-4' alt="userIcon" />
				<button type="button" onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
			</div>
			)}
		</div>
	)
}

export default Header