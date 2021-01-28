import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMenuState from "./context/navbarMenu/NavbarMenuState";
import Routes from "./Routes";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <NavbarMenuState>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </NavbarMenuState>
    </div>
  );
};

export default App;
