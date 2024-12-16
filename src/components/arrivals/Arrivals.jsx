import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import './arrivals.css';

import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';

const Arrivals = () => {
	return (
		<section className="arrivals">
			<div className="container">
				<div className="arrivals__header">
					<h2 className="title-2">NEW ARRIVALS</h2>
				</div>
				<div className="arrivals__cards">
					<Link to="/basket">
						<Card title="Толстовки & Свитшоты" img={cat01Img} />
					</Link>
					<Link to="/basket">
						<Card title="Сумки & Обувь" img={cat02Img} />
					</Link>
					<Link to="/basket">
						<Card title="Футболки & Топы" img={cat03Img} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Arrivals;
