import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './App.css';

function App() {
	return (
		<div className='App'>
				<Route path='*' component={NavBar} />
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
