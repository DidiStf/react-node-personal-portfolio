import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NavbarMenu from './components/Navbar/Menu';
import NavbarMenuToggler from './components/Navbar/Toggler';

import HomeView from './views/Home/Home';

const Routes = () => {
    return (
        <>
            <Navbar />
            <NavbarMenu />
            <NavbarMenuToggler />
            <Switch>
                <Route exact path='/' component={HomeView} />
            </Switch>
        </>
    );
};

export default Routes;
