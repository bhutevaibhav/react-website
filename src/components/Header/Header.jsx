import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import CloseMenu from '../../assets/closeMenu.svg';
import MenuIcon from '../../assets/menu.svg';
import './header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // function to handle menu toggle in mobile view
  // this will close the menu when a link is clicked
  const handleMenuToggle = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <h1 className='logo'>
        <Link to="/">Portfolio</Link>
      </h1>

      <div className='menu-icon'>
        <img 
          src={isMenuOpen ? CloseMenu : MenuIcon} 
          alt={isMenuOpen ? 'Close Menu' : 'Open Menu'} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>

      <nav >
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><NavLink to="/" onClick={handleMenuToggle}>Home</NavLink></li>
          <li><NavLink to="/work" onClick={handleMenuToggle}>Work</NavLink></li>
          <li><NavLink to="/about" onClick={handleMenuToggle}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={handleMenuToggle}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header