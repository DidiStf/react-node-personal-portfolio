import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutView from './views/About/About';
import ContactView from './views/Contact/Contact';
import ExperienceView from './views/Experience/Experience';
import HomeView from './views/Home/Home';
import ProjectsView from './views/Projects/Projects';
import SkillsView from './views/Skills/Skills';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/about' component={AboutView} />
        <Route exact path='/contact' component={ContactView} />
        <Route exact path='/experience' component={ExperienceView} />
        <Route exact path='/projects' component={ProjectsView} />
        <Route exact path='/skills' component={SkillsView} />
      </Switch>
    </>
  );
};

export default Routes;
