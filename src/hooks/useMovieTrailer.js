import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch()

	const getMoviesVideos = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
			.then(response => response.json())
		const trailer = data.results?.filter((video) => video.type === "Trailer")
		const video = trailer[0] || data.results[0]
		dispatch(addTrailerVideo(video))


	}
	useEffect(() => {
		getMoviesVideos()
	}, [movieId])
}

export default useMovieTrailer