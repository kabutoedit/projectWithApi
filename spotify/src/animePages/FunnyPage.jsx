import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCatFact, getDogImg, getProducts } from '../store/animeSlice'

function SpotifyEmbed() {
	const dispatch = useDispatch()
	const catFacts = useSelector(state => state.catFact.catFact)
	const dogImgs = useSelector(state => state.dogImg.dogImg)

	useEffect(() => {
		dispatch(getCatFact())
	}, [])

	useEffect(() => {
		dispatch(getDogImg())
	}, [])
	
	if (!catFacts || !dogImgs) {
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
		<div className='funnyPage'>
			<div className='factAboutCats'>
				<h3>Random fact about cats</h3>
				<p>{catFacts.fact}</p>
			</div>
			<div className='dogImg'>
				<img src={dogImgs} alt='dog' />
			</div>

			<div id='embed-iframe'>
				<iframe
					style={{ borderRadius: '12px' }}
					src='https://open.spotify.com/embed/playlist/4UjuAdwtb1ZpIlpu3Zt6A9?utm_source=generator'
					width='100%'
					height='352'
					frameBorder='0'
					allowFullScreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>

				<iframe
					title='Spotify Embed'
					src='https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1?utm_source=generator'
					frameBorder='0'
					allowFullScreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>

				<iframe
					src='https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP?utm_source=generator&theme=0'
					frameBorder='0'
					allowFullScreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
					title='Spotify Embed'
				></iframe>
			</div>
		</div>
	)
}

export default SpotifyEmbed
