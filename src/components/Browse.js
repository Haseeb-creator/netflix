import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {


	const showGptView = useSelector(store => store.gpt.showGptSearch)

	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useUpComingMovies()

	return (
		<div>
			<Header />
			{
				showGptView ?
					<GptSearch /> :
					<>
						<MainContainer />
						<SecondaryContainer />
					</>
			}


		</div>
	)
}

export default Browse