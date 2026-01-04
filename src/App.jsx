import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Impact from "./components/Impact/Impact";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <div className={styles.app}>
            <Hero />
            <About />
            <Impact />
            <Projects />
            <Gallery />
            <Testimonials />
            <Contact />
          </div>
        }
      />

      {/* PROJECT DETAIL */}
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
 