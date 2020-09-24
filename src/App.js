import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact';
import FirstVisit from './components/FAQ/FirstVisit';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route path='*' component={NavBar} />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/contact' exact component={Contact} />
				<Route path='/firstvisit' exact component={FirstVisit} />
				<Route path='/classes' exact component={Classes} />
			</Switch>
			<Route path='*' component={Footer} />
		</div>
	);
}

export default App;
