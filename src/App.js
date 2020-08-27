import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import FirstVisit from './components/FAQ/FirstVisit';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route path='*' component={NavBar} />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/contact' exact component={Contact} />
				<Route path='/firstvisit' exact component={FirstVisit} />
			</Switch>
			<Route path='*' component={Footer} />
		</div>
	);
}

export default App;
