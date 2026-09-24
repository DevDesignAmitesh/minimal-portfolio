import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";

export default function Page() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
}
