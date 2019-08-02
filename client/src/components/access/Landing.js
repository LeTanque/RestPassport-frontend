import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Landing = () => {
	return (
		<div>
      <div id='top'>
        <NavLink id='link' to='/login' activeStyle={{
          fontSize: '1.5rem'
        }}>
          <h1 id='login-header'>Login</h1>
        </NavLink>
        <NavLink to='/register' activeStyle={{
          fontSize: '1.5rem'
        }}>
          <h1 id='register-header'>Register</h1>
        </NavLink>
      </div>
			<Route exact path='/(|login)' component={Login} />
			<Route exact path='/register' component={Register} />
		</div>
	);
};

export default Landing;
