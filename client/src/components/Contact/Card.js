import ContactForm from './Form';
import ContactImage from './Image';

import { ContactFormProvider } from '../../context/ContactFormProvider';

import './Card.scss';

const ContactCard = () => {
  return (
    <ContactFormProvider>
      <div className='ContactCard'>
        <ContactForm />
        <ContactImage />
      </div>
    </ContactFormProvider>
  );
};

export default ContactCard;
