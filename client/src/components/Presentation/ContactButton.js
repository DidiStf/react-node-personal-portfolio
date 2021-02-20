import { Link } from 'react-router-dom';

import { translate } from '../../utils/translate';

import './ContactButton.scss';

const ContactButton = () => {
  return (
    <div className='ContactButton'>
      <Link to='/contact' className='ContactButton_link'>
        {translate('home.contactBtn')}
      </Link>
    </div>
  );
};

export default ContactButton;
