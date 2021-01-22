import ContactForm from './ContactForm';
import ContactImage from './ContactImage';

import './ContactCard.scss';

const ContactCard = () => {
    return (
        <div className="ContactCard">
            <ContactForm />
            <ContactImage />
        </div>
    );
};

export default ContactCard;
