import classnames from 'classnames';
import PropTypes from 'prop-types';

import './PrimaryButton.scss';

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <div
      className={classnames('PrimaryButton', { ...className })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default PrimaryButton;
