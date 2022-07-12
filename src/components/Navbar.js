import React from 'react'

export default function Navbar(props) {

	return (
		<>
			<nav className={`navbar navbar-${props.mode}`}>
				<div className='nav-items'>
					<div className="navbar-brand">
						<h3>Monkey API</h3>
					</div>

					<ul className="nav-list">
						<li><button disabled><a href="#" className="nav-links" style={{alignSelf: 'flex-start', background: 'transparent', outline:'none', border: 'none'}}>Home</a></button></li>
					</ul>
				</div>
			</nav>
		</>
	)
}
