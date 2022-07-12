import React from 'react'
import ghostLoader from './ghostLoader.gif'

export default function Loader() {
	return (
		<>
			<div className="loader-gif">
				<img src={ghostLoader} alt="ghostloader" style={{ height: '7rem' }} />
			</div>
		</>
	)
}
