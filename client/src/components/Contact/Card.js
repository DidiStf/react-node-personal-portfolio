import ContactForm from "./Form";
import ContactImage from "./Image";

import ContactFormState from "../../context/contactForm/ContactFormState";

import "./Card.scss";

const ContactCard = () => {
  return (
    <ContactFormState>
      <div className="ContactCard">
        <ContactForm />
        <ContactImage />
      </div>
    </ContactFormState>
  );
};

export default ContactCard;
