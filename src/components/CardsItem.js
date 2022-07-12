import React from 'react'

export default function CardsItem(props) {
	let {first_name, last_name, email, avatar} = props;

	return (
		<>
			<div className={`card card-${props.mode}`}>
				<div className="card-head">
					<div className="avatar">
						<img src={avatar} alt="" />
					</div>
				</div>
				<div className="card-body">
					<div className="name">
						<p>First Name: <b>{first_name}</b></p>
						<p>Last Name: <b>{last_name}</b></p>
					</div>
					<div className="mail">
						<p>Email: <b>{email}</b></p>
					</div>
				</div>
			</div>
		</>
	)
}
