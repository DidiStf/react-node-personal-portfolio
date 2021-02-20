import ContentCard from '../../components/Content/Card';
import Timeline from '../../components/Timeline/Timeline';

import { translate } from '../../utils/translate';

import './Experience.scss';

const ExperienceView = () => (
  <div className='ExperienceView'>
    <ContentCard heading={translate('experience.heading')}>
      <Timeline />
    </ContentCard>
  </div>
);

export default ExperienceView;
