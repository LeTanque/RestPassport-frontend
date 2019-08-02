import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo.png'

const NavBar = (props) => {
    const isOnLandingPage = () => {
        const landingPageUrls = [
            '/',
            '/login',
            '/register',
        ];
        return (landingPageUrls.some(url => url === props.location.pathname));
    };
    

    return (
        <div className = 'nav-bar' style = {{display:'flex' , height: '90px', alignItems: 'center', justifyContent: 'space-between',margin: '10px 100px'}}>
        
                <div className = 'logo-container' style = {{height:'90px', width: 'auto'}}>
                    <img src = {logo} alt = 'restaurant passport logo' style = {{height:'100%', width: 'auto'}}></img>
                </div>
            {!isOnLandingPage()
                && <div className = 'nav-links' style = {{width:'44%', color: '#085f63', fontSize:'20px', display:'flex', justifyContent: 'space-between', fontWeight: '800'}}>
                    {props.location.pathname !== '/passports' && <Link to ='/passports'>My Passport</Link>}
                    {props.location.pathname !== '/restaurants' && <Link to ='/restaurants'>Restaurants</Link>}
                    <Link to ='/' onClick={() => localStorage.setItem('token', '')}>Log Out</Link>
                </div>
            }
        </div>
    )


    
}

export default NavBar
