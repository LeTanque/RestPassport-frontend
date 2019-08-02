import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../css/access.scss';

import passportImage from '../../assests/images/passsport.jpg';

const Passports = () => {
	return (
		<div>
			<Header as='h1' color='black' className='ui header'>
				My Passport
			</Header>
			<Image src={passportImage} size='large' circular centered as={Link} to='/restaurants' />
		</div>
	);
};

export default Passports;
