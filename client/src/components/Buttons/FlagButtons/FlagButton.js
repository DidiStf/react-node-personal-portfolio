import classnames from 'classnames';
import PropTypes from 'prop-types';

import './FlagButton.scss';

const FlagButton = ({ active, alt, image, onClick }) => (
  <div className='FlagButton' onClick={onClick}>
    <img
      className={classnames('FlagButton_image', active && 'active')}
      src={image}
      alt={alt}
    />
  </div>
);

FlagButton.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FlagButton;
