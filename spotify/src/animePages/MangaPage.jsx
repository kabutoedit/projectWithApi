import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { getManga } from '../store/animeSlice'
import { useDispatch, useSelector } from 'react-redux'

const MangaPage = () => {
	let [manga, setManga] = useState([])
	const dispatch = useDispatch()
	const mangas = useSelector(state => state.manga.manga)
	manga = mangas.data
	console.log(mangas)

	useEffect(() => {
		dispatch(getManga())
	}, [])

	if (!manga) {
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
			<h1 style={{ padding: '50px 50px 0px 50px' }}>Best Manga</h1>
			<div className='container'>
				{manga?.map(manga => (
					<div key={manga.id}>
						<img
							src={manga.attributes.posterImage.original}
							alt={manga.attributes.canonicalTitle}
						/>
						<h4>{manga.attributes.canonicalTitle}</h4>
						<p>{manga.attributes.startDate.slice(0, 4)}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default MangaPage
