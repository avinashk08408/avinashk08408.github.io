import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Journey />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
