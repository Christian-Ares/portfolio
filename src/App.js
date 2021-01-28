import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Intereses } from './components/Interests/Intereses';
import { Header } from './components/Header/Header';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';
import { Proyectos } from './components/Projects/Proyectos';

import './App.css';
import { NavBar } from './components/Navbar/NavBar';




function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <NavBar />
      <AboutMe />
      <Skills />
      <Intereses />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
