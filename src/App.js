import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import "./index.css";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Work from "./pages/Work";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "./components/TransitionEffect";

function App() {
  useEffect(() => {
    AOS.init({ delay: 650 });
  }, []);

  const location = useLocation();

  return (
    <>
      <TransitionEffect />
      <LocationProvider>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </LocationProvider>
    </>
  );
}

function LocationProvider({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

export default App;
