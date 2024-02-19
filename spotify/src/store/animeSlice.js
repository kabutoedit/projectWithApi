import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAnime = createAsyncThunk('anime/getAnime', async () => {
	const response = await axios.get(
		'https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0'
	)
	return response.data
})

export const getManga = createAsyncThunk('manga/getManga', async () => {
	const response = await axios.get(
		'https://kitsu.io/api/edge/manga?page%5Blimit%5D=20&page%5Boffset%5D=0'
	)
	return response.data
})

export const getCatFact = createAsyncThunk('catFact/getCatFact', async () => {
	const response = await axios.get('https://catfact.ninja/fact')
	return response.data
})

export const getDogImg = createAsyncThunk('dogImg/getDogImg', async () => {
	const response = await axios.get('https://dog.ceo/api/breeds/image/random')
	return response.data.message
})

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const response = await axios.get('https://dummyjson.com/products')
		return response.data.products
	}
)

const animeSlice = createSlice({
	name: 'anime',
	initialState: {
		catFact: '',
		dogImg: '',
		anime: [],
		manga: [],
		products: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAnime.fulfilled, (state, action) => {
			state.anime = action.payload
		})
		builder.addCase(getManga.fulfilled, (state, action) => {
			state.manga = action.payload
		})
		builder.addCase(getCatFact.fulfilled, (state, action) => {
			state.catFact = action.payload
		})
		builder.addCase(getDogImg.fulfilled, (state, action) => {
			state.dogImg = action.payload
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export default animeSlice.reducer
