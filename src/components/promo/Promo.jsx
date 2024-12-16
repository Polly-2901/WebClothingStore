import './promo.css';
import promoImg from './../../img/images/header-img.jpg';
import { Link } from 'react-router-dom';

const Promo = () => {
	return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span className="highlight">
								<span>НОВАЯ</span>
							</span>
							КОЛЛЕКЦИЯ
							<span className="highlight highlight--yellow">
								<span>|  2024</span>
							</span>
						</div>
						<div className="promo__desc">
							Живите ради влиятельной и инновационной моды!
						</div>
						<div className="promo__btn-wrapper">
							<Link to="/basket" className="banner__btn">
								Купить сейчас
							</Link>
						</div>
					</div>
					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Promo;
