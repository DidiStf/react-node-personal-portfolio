import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Item.scss';

const NavbarItem = ({ children, className, onClick, path, ...props }) => {
  return (
    <li className='NavbarItem'>
      <Link
        className={classnames('NavbarItem_link', className)}
        to={path}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string.isRequired,
};

NavbarItem.defaultProps = {
  className: '',
  onClick: () => {},
};

export default NavbarItem;
