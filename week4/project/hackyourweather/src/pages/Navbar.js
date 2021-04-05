import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbarList'>
        <li>
          <Link className='listItem' to='/'>
            HOME
          </Link>
        </li>
        <li>
          <Link className='listItem' to='/contact'>
            CONTACT
          </Link>
        </li>
        <li>
          <Link className='listItem' to='/about'>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
