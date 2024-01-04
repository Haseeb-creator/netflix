import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const useUpComingMovies = () => {
	const dispatch = useDispatch()

	const getNowPlayingMovies = async () => {
		const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
		const json = await data.json()
		dispatch(addUpcomingMovies(json.results))
	}

	useEffect(() => {
		getNowPlayingMovies()
		// eslint-disable-next-line
	}, [])
}


export default useUpComingMovies