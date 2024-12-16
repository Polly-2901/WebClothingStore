import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import './youngsfavourite.css';

import cat04Img from './../../img/categories/cat-04.jpg';
import cat05Img from './../../img/categories/cat-05.jpg';

const YoungsFavourite = () => {
	return (
		<section className="arrivals">
			<div className="container">
				<div className="arrivals__header">
					<h2 className="title-2">Young’s Favourite</h2>
				</div>
				<div className="arrivals__cards">
					<Link to="/catalog">
						<Card title="Trending on instagram" img={cat04Img} />
					</Link>
					<Link to="/catalog">
						<Card title="All Under $40" img={cat05Img} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default YoungsFavourite;
