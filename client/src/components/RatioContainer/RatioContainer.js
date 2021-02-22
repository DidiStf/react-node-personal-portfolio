import PropTypes from 'prop-types';

import './RatioContainer.scss';

const RatioContainer = ({ children }) => {
  return <div className='RatioContainer'>{children}</div>;
};

RatioContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RatioContainer;
