import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.png';

import './Logo.scss';

const NavbarLogo = ({ path }) => {
  return (
    <Link className='NavbarLogo' to={path}>
      <img className='NavbarLogo_image' src={logo} alt='logo' />
    </Link>
  );
};

NavbarLogo.propTypes = {
  path: PropTypes.string,
};

NavbarLogo.defaultProps = {
  path: '',
};

export default NavbarLogo;
