import { Routes, Route, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import s from "./App.module.css";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      <SpeedInsights />
      <Analytics />
      <header className={`${s.navbar}`}>
        <div className={`container ${s.navrow}`}>
          <NavLink to="/" className={s.brand} aria-label="Home">
            <span className={s.logo}>NM</span> Nikhil Mathews
          </NavLink>
          <nav className={`space ${s.navlinks}`} aria-label="Primary">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              index
              element={
                <Page>
                  <Home />
                </Page>
              }
            />
            <Route
              path="about"
              element={
                <Page>
                  <About />
                </Page>
              }
            />
            <Route
              path="skills"
              element={
                <Page>
                  <Skills />
                </Page>
              }
            />
            <Route
              path="projects"
              element={
                <Page>
                  <Projects />
                </Page>
              }
            />
            <Route
              path="experience"
              element={
                <Page>
                  <Experience />
                </Page>
              }
            />
            <Route
              path="contact"
              element={
                <Page>
                  <Contact />
                </Page>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="container section"
    >
      {children}
    </motion.div>
  );
}
