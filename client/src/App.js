import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { NavbarMenuProvider } from './context/NavbarMenuProvider';
import { ProjectModalProvider } from './context/ProjectModalProvider';
import Routes from './Routes';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <NavbarMenuProvider>
        <ProjectModalProvider>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </ProjectModalProvider>
      </NavbarMenuProvider>
    </div>
  );
};

export default App;
