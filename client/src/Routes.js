import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutView from './views/About/About';
import HomeView from './views/Home/Home';
import ContactView from './views/Contact/Contact';
import SkillsView from './views/Skills/Skills';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/about' component={AboutView} />
        <Route exact path='/contact' component={ContactView} />
        <Route exact path='/skills' component={SkillsView} />
      </Switch>
    </>
  );
};

export default Routes;
