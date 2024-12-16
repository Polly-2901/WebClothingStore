import logoImg from './../../img/icons/logo.svg'
import './header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
	const [message, setMessage] = useState('');

	const handleLoginClick = () => {
		setMessage('Вы успешно вошли на сайт!');
		setTimeout(() => setMessage(''), 2500);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logoImg} alt="Logo" />
						<span>YOUR CHOICE</span>
					</div>
					<nav className="header__nav">
						<ul>
							<li><Link to='/'>Главная</Link></li>
							<li><Link to='/catalog'>Каталог</Link></li>
							<li><Link to='/basket'>Корзина</Link></li>
							<li><a href="#!" className="header__nav-btn" onClick={handleLoginClick}>Войти</a></li>
						</ul>
					</nav>
				</div>
				{message && <div className="login-message">{message}</div>}
			</div>
		</header>
	);
}

export default Header;
