import ContentCard from '../../components/Content/Card';
import ContactCard from '../../components/Contact/Card';

import './Contact.scss';

const ContactView = () => (
  <div className='ContactView'>
    <ContentCard>
      <ContactCard />
    </ContentCard>
  </div>
);

export default ContactView;
