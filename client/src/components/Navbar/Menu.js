import classnames from 'classnames';
import { useContext } from 'react';

import { NavbarMenuContext } from '../../context/NavbarMenuProvider';

import NavbarItem from './Item';
import NavbarMenuToggler from './Toggler';

import './Menu.scss';

const NavbarMenu = () => {
  const { open, toggleMenuAction } = useContext(NavbarMenuContext);
  const pathCv = '/cv/CV_EN.pdf';

  return (
    <div className={classnames('NavbarMenu', { open })}>
      <ul className='NavbarMenu_list'>
        <NavbarItem path='/' onClick={toggleMenuAction}>
          Home
        </NavbarItem>
        <NavbarItem path='/about' onClick={toggleMenuAction}>
          About
        </NavbarItem>
        <NavbarItem path='/skills' onClick={toggleMenuAction}>
          Skills
        </NavbarItem>
        <NavbarItem path='/projects' onClick={toggleMenuAction}>
          Projects
        </NavbarItem>
        <NavbarItem path='/experience' onClick={toggleMenuAction}>
          Experience
        </NavbarItem>
        <NavbarItem path='/contact' onClick={toggleMenuAction}>
          Contact
        </NavbarItem>
        <NavbarItem
          className='resume'
          path={pathCv}
          onClick={toggleMenuAction}
          target='_blank'
          rel='noreferrer noopener'
        >
          Resume
        </NavbarItem>
      </ul>
      <NavbarMenuToggler />
    </div>
  );
};

export default NavbarMenu;
