import ContentCard from '../../components/Content/Card';
import SkillsInfo from '../../components/Skills/Info';
import SkillsWordCloud from '../../components/Skills/WordCloud';

import { translate } from '../../utils/translate';

import './Skills.scss';

const SkillsView = () => {
  return (
    <div className='SkillsView'>
      <ContentCard heading={translate('skills.heading')}>
        <SkillsInfo />
        <SkillsWordCloud />
      </ContentCard>
    </div>
  );
};

export default SkillsView;
