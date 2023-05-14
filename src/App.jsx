import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import MyPage from "./components/MyPage";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Experience />
      <MyPage />
      <Contact />
    </div>
  );
}

export default App