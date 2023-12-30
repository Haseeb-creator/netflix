import React from 'react'
import { IoPlay } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";


const VideoTitle = ({ title, overview }) => {
	return (
		<div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r  from-black'>
			{title && <h1 className='text-2xl font-bold w-1/4'>{title}</h1>}
			{overview && <p className='text-sm text-gray-400 w-1/4 pt-1'>{overview}</p>}

			<div className=''>
				<button type="button" className='bg-slate-200 text-black p-2 px-12 mr-4 mt-3 rounded-lg hover:bg-slate-300'> <IoPlay size={25} className='inline-flex' /> Play</button>
				<button type="button" className='bg-slate-700 text-white p-2 px-8 rounded-lg hover:bg-slate-800'> <IoIosInformationCircleOutline size={25} className='inline-flex' /> More Info</button>
			</div>
		</div>
	)
}

export default VideoTitle