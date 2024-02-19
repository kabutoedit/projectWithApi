import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnime } from '../store/animeSlice'

const Anime = () => {
	let [anime, setAnime] = useState([])
	const dispatch = useDispatch()
	const animes = useSelector(state => state.anime.anime)
	anime = animes.data

	useEffect(() => {
		dispatch(getAnime())
	}, [])

	if (!anime) {
		return (
			<h1 style={{ padding: '300px 400px 400px 400px', textAlign: 'center' }}>
				Loading...
			</h1>
		)
	}

	window.addEventListener('scroll', function () {
		var nav = document.querySelector('nav')
		if (window.scrollY > 0) {
			nav.classList.add('scrolled') 
		} else {
			nav.classList.remove('scrolled') 
		}
	})


	return (
		<>
			<h1 style={{ padding: '50px 50px 0px 50px' }}>Best Anime</h1>
			<div className='container'>
				{anime?.map(anime => (
					<div key={anime.id}>
						<img
							src={anime.attributes.posterImage.original}
							alt={anime.attributes.canonicalTitle}
						/>
						<h4>{anime.attributes.canonicalTitle}</h4>
						<p>{anime.attributes.startDate.slice(0, 4)}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default Anime
