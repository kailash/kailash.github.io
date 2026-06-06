import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-100/80">
        <div className="max-w-screen-xl mx-auto min-h-screen bg-white border-x border-gray-100 shadow-[0_0_60px_-15px_rgba(0,0,0,0.12)]">
          <Navbar>
            <main className="flex-1 w-full min-h-screen bg-white text-gray-900 antialiased">
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </Navbar>
        </div>
      </div>
    </ErrorBoundary>
  );
}
