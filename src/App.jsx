import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import MyPage from "./components/MyPage";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Experience from "./components/Experience";
import getCurrentDate from "./common/utils";

import Navbar from "./layouts/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Experience />
      <MyPage />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Belay Birhanu G</h6>
        <p>Microverse © All CopyRights Reserved {getCurrentDate()}</p>
      </footer>
    </div>
  );
}

export default App