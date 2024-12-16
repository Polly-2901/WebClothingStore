import './vouchers.css';
import vouchersImg from './../../img/vouchers/vouchers-img.jpg';
import googleImg from './../../img/vouchers/google-play.png';
import appImg from './../../img/vouchers/app-store.png';

const Vouchers = () => {
	return (
		<section className="vouchers">
			<div className="vouchers_content">
				<div className="vouchers__text-wrapper">
					<div className="vouchers__title-container"> {/* Added container */}
						<div className="vouchers__title">
							<span>DOWNLOAD APP & GET THE VOUCHER!</span>
						</div>
					</div>
					<div className="vouchers__desc-container">
						<div className="vouchers__desc">
							Get 30% off for your first transaction using the Rondovision mobile app.
						</div>
					</div>
					<div className="icons-container"> {/* Added container */}
						<div className="app__img">
							<img src={appImg} alt="App-Store" />
						</div>
						<div className="google__img">
							<img src={googleImg} alt="OpenAI-Play" />
						</div>
					</div>
				</div>
				<div className="vouchers__img">
					<img src={vouchersImg} alt="Vouchers" />
				</div>
			</div>
		</section>
	);
};

export default Vouchers;