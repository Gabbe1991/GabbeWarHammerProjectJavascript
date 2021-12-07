import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Warhammer 40k&nbsp;&nbsp;
            <img src="/images/EmperiumEagle.png" width="59" height="25"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            Menu&nbsp;&nbsp;
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />   
          </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li className='nav-item'>
              <Link to='/RiseofMankind' className='nav-links' onClick={closeMobileMenu}>
                Rise of Mankind
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/TheGreatCrusade' className='nav-links' onClick={closeMobileMenu}>
                The Great Crusade
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/TheHorusHeresy' className='nav-links' onClick={closeMobileMenu}>
                The Horus Heresy
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>  
      </nav>  
    </>
  );
}

export default Navbar;