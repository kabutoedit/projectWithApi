import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/animeSlice'
import { useEffect } from 'react'

export default function ProductsPage() {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.products)
	console.log(products)

	useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<>
			<h1 style={{ padding: '50px 50px 0px 50px' }}>Products</h1>

			<div className='container'>
				{products &&
					products?.map(product => (
						<div key={product.id}>
							<img
								style={{ width: '200px' }}
								src={product.thumbnail}
								alt={product.title}
							/>
							<h4>{product.title}</h4>
							<p>{product.price}</p>
						</div>
					))}
			</div>
		</>
	)
}
