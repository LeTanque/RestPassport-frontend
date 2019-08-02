import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Image } from 'semantic-ui-react';
import './access/access.scss';
import { getVisited } from "../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux
// import {
//   Container,
//   Header,
//   Grid,
//   Checkbox,
//   Search,
//   Label,
//   Icon
// } from "semantic-ui-react";

import useLocalStorage from '../authentication/useLocalStorage';

const dummyData = [
	// {
	// 	id                 : 60,
	// 	city               : 'New York, NY',
	// 	restaurantsVisited : [ 3, 0, 9 ],
	// },
	// {
	//   id: 3,
	//   city: 'Chicago, IL',
	//   restaurantsVisited: [ 15, 99, 2, 25 ],
	// },
];

const Passports = props => {
	const [ activePassportId, setActivePassportId ] = useLocalStorage('passportId');
	const [ passports, setPassports ] = useState();

	const retrievePassports = () => {
		(async () => {
			try {
				const repsonse = await axios.get('https://rickandmortyapi.com/api/episode/');

				setPassports(repsonse.data);
			} catch (error) {
				console.error(error);
			}
		})();
	};

	const selectPassportFactory = id => () => setActivePassportId(id);

	return (
		<div>
			<Header as='h1' color='#085F63' className='ui header'>
				My Passport
			</Header>

			<Image
				src='https://media.afar.com/uploads/images/afar_post_headers/images/wsGsA768bP/original_shutterstock_1110443648.jpg?1543263550'
				size='large'
				circular
				centered
				href='http://localhost:3000/restaurants'
			/>

			{activePassportId !== undefined &&
			dummyData.find(passport => passport.id === activePassportId) && (
				<h3>Selected: {dummyData.find(passport => passport.id === activePassportId).city}</h3>
			)}
			<div className='Passports'>
				<div className='add-passport'>
					{/* <img src="" alt=""></img> // uncomment once you have an svg for a plus sign */}
					{/* <h3>+</h3>
          <p>Add Passport</p> */}
				</div>
				{dummyData.map(passport => {
					return (
						<div
							className='passport'
							key={passport.id}
							data-id={passport.id}
							onClick={selectPassportFactory(passport.id)}>
							<h3>{passport.city}</h3>
							{/* <p>{passport.restaurantsVisited.length}</p> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Passports;

