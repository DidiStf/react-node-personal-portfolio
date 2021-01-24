import image from "../../assets/images/IMG CV.png";

import "./ContactImage.scss";

const ContactImage = () => {
  return (
    <div className="ContactImage">
      <img src={image} className="ContactImage_image" alt="Dilyana Stefanova" />
    </div>
  );
};

export default ContactImage;
