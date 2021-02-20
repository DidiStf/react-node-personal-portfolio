import NavbarMenu from './Menu';
import NavbarMenuToggler from './Toggler';
import TerminalAnimation from './TerminalAnimation';

import './Navbar.scss';

const Navbar = () => (
  <>
    <div className='Navbar'>
      <TerminalAnimation />
      <NavbarMenuToggler />
    </div>
    <NavbarMenu />
  </>
);

export default Navbar;
