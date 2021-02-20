import PropTypes from 'prop-types';

import './Card.scss';

const ContentCard = ({ heading, children }) => {
  return (
    <div className='ContentCard'>
      <div className='ContentCard_heading'>
        <h2>{heading}</h2>
      </div>
      <div className='ContentCard_content'>{children}</div>
    </div>
  );
};

ContentCard.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentCard;
