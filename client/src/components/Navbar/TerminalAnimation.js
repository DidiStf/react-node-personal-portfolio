import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './TerminalAnimation.scss';

const TerminalAnimation = ({ path }) => (
  <Link className='TerminalAnimation' to={path}>
    didistf@xmg-fusion: ~$
    <div className='TerminalAnimation_cursor'> </div>
  </Link>
);

TerminalAnimation.propTypes = {
  path: PropTypes.string,
};

TerminalAnimation.defaultProps = {
  path: '',
};

export default TerminalAnimation;
