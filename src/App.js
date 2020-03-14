import React from 'react';
import logo from '../src/img/logo.png';
import './App.css';
import Header from './copmponent/Header/Header';
import MainPage from './copmponent/MainPage/MainPage';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="mainpage"></div>
			<MainPage></MainPage>
		</div>
	);
}

export default App;
