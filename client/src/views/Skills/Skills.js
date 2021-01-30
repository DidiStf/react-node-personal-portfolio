import ContentCard from '../../components/Content/Card';
import SkillsInfo from '../../components/Skills/Info';
import SkillsWordCloud from '../../components/Skills/WordCloud';

import './Skills.scss';

const SkillsView = () => {
  return (
    <div className='SkillsView'>
      <ContentCard className='SkillsView_ContentCard' heading='Skills'>
        <SkillsInfo />
        <SkillsWordCloud />
      </ContentCard>
    </div>
  );
};

export default SkillsView;
