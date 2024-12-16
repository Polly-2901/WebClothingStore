import './banner.css';
import bannerImg from './../../img/images/promo-img.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<section className="banner">
			<div className="banner__content">
				<div className="banner__img">
					<img src={bannerImg} alt="Banner" />
				</div>
				<div className="banner__text">
					<div className="banner__title-wrapper">
						<div className="highlight">
							<span>PAYDAY</span>
						</div>
						<div className="highlight highlight--white">
							<span>SALE NOW</span>
						</div>
					</div>
					<div className="banner__text-container">
						<div className="banner__desc">
							Потратьте минимум 100 руб, чтобы получить скидку 30% по промокоду при следующей покупке
						</div>
						<div className="banner__desc banner__desc--date">
							1 Июня - 10 Июня 2024
						</div>
						<div className="banner__desc">
							*Действуют правила и условия
						</div>
					</div>
					<div className="banner__btn-wrapper">
						<Link to="/basket" className="banner__btn">
							Купить сейчас
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
