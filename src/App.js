import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Intereses } from './components/Interests/Intereses';

import { Contacto } from './components/Contacto/Contacto';

import { Proyectos } from './components/Projects/Proyectos';

import './App.css';
import { NavBar } from './components/Navbar/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Intereses />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
