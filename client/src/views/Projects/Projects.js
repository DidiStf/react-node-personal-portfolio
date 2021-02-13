import ContentCard from '../../components/Content/Card';
import ProjectsCardList from '../../components/Projects/CardList';

import './Projects.scss';

const ProjectsView = () => {
  return (
    <div className='ProjectsView'>
      <ContentCard heading='Projects'>
        <ProjectsCardList />
      </ContentCard>
    </div>
  );
};

export default ProjectsView;
