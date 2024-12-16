import React from 'react';
import { Link } from 'react-router-dom';
import CatalogCard from '../catalog_card/CatalogCard';
import './catalog.css';

import Img01_1 from './../../img/catalog/01_1.jpg';
import Img02_1 from './../../img/catalog/02_1.jpg';
import Img03_1 from './../../img/catalog/03_1.jpg';
import Img01_2 from './../../img/catalog/01_2.jpg';
import Img02_2 from './../../img/catalog/02_2.jpg';
import Img03_2 from './../../img/catalog/03_2.jpg';
import Img01_3 from './../../img/catalog/01_3.jpg';
import Img02_3 from './../../img/catalog/02_3.jpg';
import Img03_3 from './../../img/catalog/03_3.jpg';
import Img01_4 from './../../img/catalog/01_4.jpg';
import Img02_4 from './../../img/catalog/02_4.jpg';
import Img03_4 from './../../img/catalog/03_4.jpg';

const Catalog = () => {
	return (
		<section className="catalog">
			<div className="container">
				<div className="catalog__header">
					<h2 className="title-2">Каталог</h2>
				</div>
				<div className="catalog__cards">
					<Link to="/basket">
						<CatalogCard img={Img01_1} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img02_1} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img03_1} />
					</Link>
				</div>
				<div className="catalog__cards">
					<Link to="/basket">
						<CatalogCard img={Img01_2} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img02_2} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img03_2} />
					</Link>
				</div>
				<div className="catalog__cards">
					<Link to="/basket">
						<CatalogCard img={Img01_3} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img02_3} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img03_3} />
					</Link>
				</div>
				<div className="catalog__cards">
					<Link to="/basket">
						<CatalogCard img={Img01_4} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img02_4} />
					</Link>
					<Link to="/basket">
						<CatalogCard img={Img03_4} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Catalog;
