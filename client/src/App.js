import './App.scss';

import Navbar from './components/Navbar/Navbar';
import NavbarMenu from './components/Navbar/Menu';
import NavbarMenuToggler from './components/Navbar/Toggler';

import HomeView from './views/Home/Home';

import NavbarMenuState from './context/navbarMenu/NavbarMenuState';

const App = () => {
  return (
    <div className="App">
      <NavbarMenuState>
        <Navbar />
        <NavbarMenu />
        <NavbarMenuToggler />
        <HomeView />
      </NavbarMenuState>
    </div>
  );
}

export default App;
