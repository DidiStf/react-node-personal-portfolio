import NavbarMenu from './Menu';
import NavbarMenuToggler from './Toggler';
import TerminalAnimation from './TerminalAnimation';

import logo from '../../assets/logo/logo.png';

import './Navbar.scss';

const Navbar = () => (
  <>
    <div className='Navbar'>
      <img className='Navbar_logo' src={logo} alt='logo' />
      <TerminalAnimation path='/' />
      <NavbarMenuToggler />
    </div>
    <NavbarMenu />
  </>
);

export default Navbar;
