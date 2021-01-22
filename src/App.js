import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Intereses } from './components/Interests/Intereses';
import { NavBar } from './components/Navbar/NavBar';


import './App.css';
import { Contacto } from './components/Contacto/Contacto';




function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Intereses />
      <Contacto />
    </div>
  );
}

export default App;
