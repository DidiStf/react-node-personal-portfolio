import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

import ContactFormState from "../../context/contactForm/ContactFormState";

import "./ContactCard.scss";

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
