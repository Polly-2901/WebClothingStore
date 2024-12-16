import React, { useState } from 'react';
import './community.css';

const Community = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      console.log('Адрес электронной почты действителен:', email);
    } else {
      setError('Пожалуйста, введите действительный адрес электронной почты.');
    }
  };

  return (
    <section className="community">
      <div className="community-content">
        <div className="community__text-wrapper">
          <div className="community__title-container">
            <h1 className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
            <p className="community__desc">Type your email down below and be young wild generation</p>
          </div>
          <div className="community__form-container">
            <form className="community-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Add your email here"
                className="community__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="community__button">SEND</button>
            </form>
            {error && <p className="community__error">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
