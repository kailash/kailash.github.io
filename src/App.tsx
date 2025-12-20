import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* main content: top padding on mobile, margin on desktop and landscape mobile */}
      <main className="ml-0 pt-16 sm:ml-20 sm:pt-0 md:ml-96 md:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
