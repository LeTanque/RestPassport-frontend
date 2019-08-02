import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './css/access.scss';
import Passport from './components/restaurant-list/RestaurantList';
import Passports from './components/passports/Passports';
import NavBar from './components/nav-bar/nav-bar';
import Landing from './components/access/Landing';
import './App.css';
import './css/passport.scss';
import PrivateRouteWithProps from './authentication/PrivateRouteWithProps';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={NavBar} />
			<Switch>
				<Route exact path='/(|login|register)' component={Landing} />
				<PrivateRouteWithProps exact path='/passports' component={Passports} />
				<PrivateRouteWithProps exact path='/restaurants' component={Passport} />
			</Switch>
		</div>
	);
}

export default App;
