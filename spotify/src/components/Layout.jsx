import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<Outlet />
			<h2 className='footer'>Made by Kabuto</h2>
		</>
	)
}

export default Layout
