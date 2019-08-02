import React from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// import { Form as UIForm } from 'semantic-ui-react';

const Login = props => {
	return (
		<Formik
			initialValues={{
				username : '',
				password : '',
			}}
			onSubmit={(values, actions) => {
				console.log(values);
				actions.setSubmitting(true);
				axios
					.post('https://restaurant-app-appi.herokuapp.com/api/v1/auth/login', values)
					.then(res => {
						localStorage.setItem('token', res.data.body.token);
					})
					.then(() => props.history.push('/passports'))
					.catch(err => console.log(err));
			}}
			validationSchema={() =>
				Yup.object().shape({
					username : Yup.string()
						.max(16, 'Your username must be less than 16 characters')
						.min(5, 'Your name must be at least five characters long')
						.required('A name is required'),
					password : Yup.string()
						.min(6, 'Your password must have a minimum of six characters.')
						.required('Password is required'),
				})}
			render={props => (
				<Form
					style={{
						display       : 'flex',
						flexDirection : 'column',
						alignItems    : 'center',
					}}
					onSubmit={props.handleSubmit}>

					<div>
						{props.touched.username && props.errors.username && <h3>{props.errors.username}</h3>}

						<Field
							placeholder='Username'
							label='username'
							name='username'
							id='username'
							type='text'
							onChange={props.handleChange}
							width='4'
						/>
					</div>

					<div>
						{props.touched.password && props.errors.password && <h3>{props.errors.password}</h3>}
						<Field
							placeholder='Password'
							label='password'
							name='password'
							id='password'
							type='password'
							onChange={props.handleChange}
							width='4'
						/>
					</div>

					<button type='submit' className='ui button'>
						Login
					</button>

				</Form>
			)}
		/>
	);
};

export default Login;
