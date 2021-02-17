import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './LinkIcon.scss';

const LinkIcon = ({ icon, iconSize, link }) => {
  return (
    <a
      className='LinkIcon'
      href={link}
      rel='noreferrer noopener'
      target='_blank'
    >
      <FontAwesomeIcon icon={icon} className='LinkIcon_icon' size={iconSize} />
    </a>
  );
};

LinkIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  iconSize: PropTypes.string,
  link: PropTypes.string.isRequired,
};

LinkIcon.defaultProps = {
  iconSize: 'md',
};

export default LinkIcon;
