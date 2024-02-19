import { configureStore } from '@reduxjs/toolkit'
import animeSlice from './animeSlice.js'

export const store = configureStore({
	reducer: {
		anime: animeSlice,
		manga : animeSlice,
		catFact : animeSlice,
		dogImg : animeSlice,
		products : animeSlice
	},
})
