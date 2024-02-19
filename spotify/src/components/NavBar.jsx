import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<p>
						<NavLink to='/'>
							FUNNY
						</NavLink>
					</p>
					<p>
						<NavLink to='/anime'>ANIME</NavLink>
					</p>
					<p>
						<NavLink to='/manga'>MANGA</NavLink>
					</p>
					<p>
						<NavLink to='/products'>PRODUCTS</NavLink>
					</p>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
