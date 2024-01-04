import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const usePopularMovies = () => {
	const dispatch = useDispatch()

	const getNowPlayingMovies = async () => {
		const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
		const json = await data.json()
		console.log(json.results);
		dispatch(addPopularMovies(json.results))
	}

	useEffect(() => {
		getNowPlayingMovies()
		// eslint-disable-next-line
	}, [])
}


export default usePopularMovies