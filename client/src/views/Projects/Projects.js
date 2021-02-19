import ContentCard from '../../components/Content/Card';
import ProjectsCardList from '../../components/Projects/CardList';
import ProjectModal from '../../components/Projects/Modal';

import { translate } from '../../utils/translate';

import './Projects.scss';

const ProjectsView = () => {
  return (
    <div className='ProjectsView'>
      <ContentCard heading={translate('projects.heading')}>
        <ProjectsCardList />
      </ContentCard>
      <ProjectModal />
    </div>
  );
};

export default ProjectsView;
