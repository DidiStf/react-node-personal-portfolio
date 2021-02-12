import ContentCard from '../../components/Content/Card';
import Timeline from '../../components/Timeline/Timeline';

import './Experience.scss';

const ExperienceView = () => {
  return (
    <div className='ExperienceView'>
      <ContentCard heading='Experience'>
        <Timeline />
      </ContentCard>
    </div>
  );
};

export default ExperienceView;
