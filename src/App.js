import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Intereses } from './components/Interests/Intereses';
import { NavBar } from './components/Navbar/NavBar';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Intereses />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
