import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../Button/Button';

function Navbar() {

  const handleClick = () => {
    setclicked(!clicked);
  }
  const [clicked, setclicked] = useState(false);

  return (

    <nav className="nav">
      <div className='contained'>
        <div className="logo">
          <Link to='/Home'> <h1> ShopKit </h1> </Link>
        </div>
        <div className='navItems'>
          
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/${item.link}`} className={item.cName}>{item.name}</Link>
                </li> 
              )
            }
            )}
          </ul>


          <Link to='/Cart'> <div className="shopIcon" ><FontAwesomeIcon icon={faShoppingCart} /></div> </Link>
          <Link to='/SignUp'> <Button>Sign Up</Button> </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
          </div>
        </div>
      </div>
    </nav>

  );
}


export default Navbar