import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';
import TranslationProvider from './components/Translation/Provider';
import { NavbarMenuProvider } from './context/NavbarMenuProvider';
import { ProjectModalProvider } from './context/ProjectModalProvider';
import { TranslationLocaleProvider } from './context/TranslationLocaleProvider';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <TranslationLocaleProvider>
        <TranslationProvider>
          <NavbarMenuProvider>
            <ProjectModalProvider>
              <Router>
                <Navbar />
                <Routes />
              </Router>
            </ProjectModalProvider>
          </NavbarMenuProvider>
        </TranslationProvider>
      </TranslationLocaleProvider>
    </div>
  );
};

export default App;
