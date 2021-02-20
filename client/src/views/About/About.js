import ContentCard from '../../components/Content/Card';
import AboutImage from '../../components/About/Image';
import AboutInfo from '../../components/About/Info';

import { translate } from '../../utils/translate';

import './About.scss';

const AboutView = () => (
  <div className='AboutView'>
    <ContentCard heading={translate('about.heading')}>
      <>
        <AboutInfo />
        <AboutImage />
      </>
    </ContentCard>
  </div>
);

export default AboutView;
