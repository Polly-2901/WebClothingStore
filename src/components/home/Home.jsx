import React from 'react';
import Promo from '../promo/Promo';
import Brands from '../brands/Brands';
import Arrivals from '../arrivals/Arrivals';
import Banner from '../banner/Banner';
import YoungsFavourite from '../youngs_favourite/YoungsFavourite';
import Vouchers from '../vouchers/Vouchers';

function Home() {
	return (
		<div>
			<Promo />
			<Brands />
			<Arrivals />
			<Banner />
			<YoungsFavourite />
			<Vouchers />
		</div>
	);
}

export default Home;
