import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NavbarMenuState from './context/navbarMenu/NavbarMenuState';
import ProjectModalState from './context/projectModal/ProjectModalState';
import Routes from './Routes';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavbarMenuState>
        <ProjectModalState>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </ProjectModalState>
      </NavbarMenuState>
    </div>
  );
};

export default App;
