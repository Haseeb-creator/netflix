import React from 'react'
import { useSelector } from 'react-redux'
import lng from '../utils/languageConstants'

const GptSearchBar = () => {



	const language = useSelector((store) => store.config)

	return (
		<div>
			<div className='pt-[10%] flex justify-center'>
				<form action="" className='w-1/2 bg-black grid grid-cols-12'>
					<input type="text" className='p-3 m-3 col-span-9' name="search" id="search" placeholder={lng[language.lng].gptSearchPlaceHolder} />
					<button type="button" className='py-2 px-3 m-3 col-span-3 bg-red-700 text-white rounded-lg ' >
						{lng[language.lng].search}
					</button>
				</form>
			</div>
		</div>
	)
}

export default GptSearchBar