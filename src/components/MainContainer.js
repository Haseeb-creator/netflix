import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {

	const movies = useSelector(store => store.movies?.nowPlayingMovies)
	if (!movies) return;

	const mainMovies = movies[11]

	const { original_title, overview, id } = mainMovies

	return (
		<div>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackGround movieId={id} />
		</div>
	)
}

export default MainContainer


/* 

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround'11

const MainContainer = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const movies = useSelector((store) => store.movies?.nowPlayingMovies);

	useEffect(() => {
		if (!movies || movies.length === 0) return;

		const intervalId = setInterval(() => {
			const newIndex = (currentIndex + 1) % movies.length;
			setCurrentIndex(newIndex);
		}, 10000);

		return () => clearInterval(intervalId); //cleanup on unmount
	}, [currentIndex, movies]);

	if (!movies || movies.length === 0) return null; // or return a loading message

	const mainMovies = movies[currentIndex];
	const { original_title, overview, id } = mainMovies;

	return (
		<div>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackGround movieId={id} />
		</div>
	);
};

export default MainContainer;
*/