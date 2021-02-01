import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Intereses } from './components/Interests/Intereses';
import { Contacto } from './components/Contacto/Contacto';
import { Proyectos } from './components/Projects/Proyectos';
import { NavBar } from './components/Navbar/NavBar';

import './App.css';

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