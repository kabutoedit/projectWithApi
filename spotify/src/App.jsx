import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AnimePage from './animePages/AnimePage'
import FunnyPage from './animePages/FunnyPage'
import MangaPage from './animePages/MangaPage'
import Layout from './components/Layout'
import ProductsPage from './animePages/ProductsPage'

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<FunnyPage />} />
					<Route path='/anime' element={<AnimePage />} />
					<Route path='/manga' element={<MangaPage />} />
					<Route path='/products' element={<ProductsPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
