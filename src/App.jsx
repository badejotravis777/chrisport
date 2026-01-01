import styles from './App.module.css';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Impact from './components/Impact/Impact';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <About />
      <Impact />
      <Projects />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
