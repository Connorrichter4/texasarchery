import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
		<div className='App'>
      <h1>Texas Archery Academy</h1>
			<Link to='/'>HOME</Link>
			<Link to='/firstvisit'>FIRST VISIT FAQ</Link>
			<Link to='/classes'>CLASSES</Link>
			<Link to='/events'>GROUPS & BIRTHDAYS</Link>
			<Link to='/locations'>LOCATIONS</Link>
		</div>
	);
}

export default App;
