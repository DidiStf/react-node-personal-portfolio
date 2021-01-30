import classnames from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavbarMenuContext from '../../context/navbarMenu/navbarMenuContext';
import NavbarMenuToggler from './Toggler';

import './Menu.scss';

const NavbarMenu = () => {
  const { open, toggleMenuAction } = useContext(NavbarMenuContext);

  return (
    <div className={classnames('NavbarMenu', { open })}>
      <ul className='NavbarMenu_list'>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link test'
            to='/'
            onClick={toggleMenuAction}
          >
            Home
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link'
            to='/about'
            onClick={toggleMenuAction}
          >
            About
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link'
            to='/skills'
            onClick={toggleMenuAction}
          >
            Skills
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link'
            to='/'
            onClick={toggleMenuAction}
          >
            Portfolio
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link test'
            to='/'
            onClick={toggleMenuAction}
          >
            Experience
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link'
            to='/contact'
            onClick={toggleMenuAction}
          >
            Contact
          </Link>
        </li>
        <li className='NavbarMenu_list-item'>
          <Link
            className='NavbarMenu_list-item_link resume'
            to='/'
            onClick={toggleMenuAction}
          >
            Resume
          </Link>
        </li>
      </ul>
      <NavbarMenuToggler />
    </div>
  );
};

export default NavbarMenu;
