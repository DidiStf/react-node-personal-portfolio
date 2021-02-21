import NavbarLogo from './Logo';
import NavbarMenu from './Menu';
import NavbarMenuToggler from './Toggler';
import TerminalAnimation from './TerminalAnimation';

import './Navbar.scss';

const Navbar = () => (
  <>
    <div className='Navbar'>
      <NavbarLogo path='/' />
      <TerminalAnimation path='/' />
      <NavbarMenuToggler />
    </div>
    <NavbarMenu />
  </>
);

export default Navbar;
