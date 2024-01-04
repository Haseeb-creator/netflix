import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

	const movies = useSelector((store) => store.movies)


	return (

		<div className='bg-black'>
			<div className='-mt-44 pl-8 relative z-20'>
				{movies?.nowPlayingMovies &&
					<MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
				}
				{movies?.topRatedMovies &&
					<MovieList title={'Top Rated'} movies={movies?.topRatedMovies} />
				}
				{movies?.popularMovies &&
					<MovieList title={'Popular'} movies={movies?.popularMovies} />
				}
				{movies?.upComingMovies &&
					<MovieList title={'Upcoming Movies'} movies={movies?.upComingMovies} />
				}
			</div>
		</div>
	)
}

export default SecondaryContainer