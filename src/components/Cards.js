import React, { useState, useEffect } from 'react'
import CardsItem from './CardsItem'
import Loader from './Loader';

export default function Cards(props) {

	const [cardData, setCardData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [perPage, setPerPage] = useState(0);
	const [navBtns, setNavBtns] = useState('hide');



	const updateCards = async () => {
		let url = `https://reqres.in/api/users?page=${page}`;
		setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();
		setCardData(parsedData.data);
		setLoading(false);
		setTotal(parsedData.total);
		setPerPage(parsedData.per_page);
		setNavBtns('show');
	}

	useEffect(() => {
		
	}, [])

	const handleNextCLick = async () => {
		let url = `https://reqres.in/api/users?page=${page + 1}`;
		setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();
		setPage(page + 1);
		setCardData(parsedData.data);
		setLoading(false);
	}

	const handlePreviousCLick = async () => {
		let url = `https://reqres.in/api/users?page=${page - 1}`;
		setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();
		setPage(page - 1);
		setCardData(parsedData.data);
		setLoading(false);
	}


	return (
		<>

			{loading && <div className="container" style={{ textAlign: 'center', position: 'fixed', top: '45%', left: '40%' }}>
				<Loader />
			</div>}
			<div className="cards-collections" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
				{!loading && cardData.map((element) => {
					return <div className="cards-collections" key={element.id}>
						<CardsItem mode={props.mode} first_name={element.first_name} last_name={element.last_name} email={element.email} avatar={element.avatar} />
					</div>
				})}
			</div>
			<div className="nav-btns">
				<button disabled={page <= 1} className={`btn btn-nav-${props.mode}`} type="button" onClick={handlePreviousCLick} style={{display: navBtns === 'hide'?'none':'block'}}>&larr; Previous</button>
				<button disabled={page >= total / perPage} className={`btn btn-nav-${props.mode}`} onClick={handleNextCLick} style={{display: navBtns === 'hide'?'none':'block'}}>Next &rarr;</button>
				<button className={`btn btn-${props.mode} btn-get`} onClick={updateCards} style={{display: navBtns === 'show'?'none':'block'}}>GET</button>
			</div>
		</>
	)
}
