import classnames from 'classnames';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';

import './PrimaryExternalLink.scss';

const PrimaryExternalLink = ({ children, className, link, onClick }) => {
  return (
    <PrimaryButton onClick={onClick}>
      <a
        className={classnames('PrimaryExternalLink', className)}
        href={link}
        rel='noreferrer noopener'
        target='_blank'
      >
        {children}
      </a>
    </PrimaryButton>
  );
};

PrimaryExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PrimaryExternalLink.defaultProps = {
  className: '',
  onClick: () => {},
};

export default PrimaryExternalLink;
