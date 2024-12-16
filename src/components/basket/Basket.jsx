import './basket.css';
import promoImg from './../../img/images/basket-img.jpg';
import { useState, useEffect } from 'react';
import mask from './../../libs/phoneMask/mask';

const Basket = () => {
	const [formData, setFormData] = useState({
		lastName: '',
		firstName: '',
		phone: '',
		email: ''
	});
	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateEmail = (email) => {
		const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePhone = (phone) => {
		const cleanedPhone = phone.replace(/\D/g, '');
		return cleanedPhone.length >= 10 && cleanedPhone.length <= 15;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { lastName, firstName, phone, email } = formData;

		if (!lastName || !firstName || !validatePhone(phone) || !validateEmail(email)) {
			alert('Пожалуйста, заполните все поля корректно.');
			return;
		}

		setSuccessMessage('Ваш заказ был успешно оформлен!');
		setTimeout(() => setSuccessMessage(''), 5000);
	};

	useEffect(() => {
		mask('input[data-tel-input]');
		const phoneInput = document.querySelector('input[data-tel-input]');
		const handleInput = (e) => {
			setFormData((prevFormData) => ({ ...prevFormData, phone: e.target.value }));
		};

		phoneInput.addEventListener('input', handleInput);

		return () => {
			phoneInput.removeEventListener('input', handleInput);
		};
	}, []);

	return (
		<section className="basket">
			<div className="container">
				{successMessage && <div className="popup-message">{successMessage}</div>}
				<div className="basket__content">
					<div className="basket__form">
						<div className="basket__form-title">
							<h2 className="title2">
								<span className="highlight">
									<span>Корзина</span>
								</span>
							</h2>
						</div>
						<form className="basket__form-form" onSubmit={handleSubmit}>
							<div className="form__row">
								<input
									type="text"
									className="form__input"
									placeholder="Фамилия"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									autoComplete="off"
									required
								/>
								<input
									type="text"
									className="form__input"
									placeholder="Ваш телефон"
									name="phone"
									data-tel-input
									value={formData.phone}
									onChange={handleChange}
									autoComplete="off"
									required
								/>
							</div>
							<div className="form__row">
								<input
									type="text"
									className="form__input"
									placeholder="Имя"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									autoComplete="off"
									required
								/>
								<input
									type="email"
									className="form__input"
									placeholder="Электронная почта"
									name="email"
									value={formData.email}
									onChange={handleChange}
									autoComplete="off"
									required
								/>
							</div>
							<div className="form__privacy-wrapper">
								<p className="form__privacy">
									*Оформляя заказ, я соглашаюсь с обработкой персональных данных в соответствии с
									<a href="https://markformelle.by/internet-magazin/politika-o-zashchite-personalnykh-dannykh/" target="_blank" rel="noopener noreferrer">
										политикой обработки персональных данных
									</a>, а также принимаю условия
									<a href="https://markformelle.by/internet-magazin/public-offert/" target="_blank" rel="noopener noreferrer">
										пользовательского соглашения
									</a>.
								</p>
								<button type="submit" className="form__btn">Оформить</button>
							</div>
						</form>
					</div>
					<div className="basket__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Basket;
