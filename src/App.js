import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Catalog from './components/catalog_page/Catalog';
import Community from './components/community/Community';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/basket" element={<Basket />} />
				</Routes>
				<Community />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
