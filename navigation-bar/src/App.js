import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Products from './pages/products';
import Pricing from './pages/pricing';
import Guides from './pages/guides';
import Templates from './pages/templates';
import InstallNow from './pages/installNow';
import Premium from './pages/premium';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Products' element={<Products />} />
		<Route path='/Pricing' element={<Pricing />} />
		<Route path='/Guides' element={<Guides />} />
		<Route path='/Templates' element={<Templates />} />
		<Route path='/InstallNow' element={<InstallNow />} />
		<Route path='/Premium' element={<Premium />} />
	</Routes>
	</Router>
);
}

export default App;
