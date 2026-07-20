import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
