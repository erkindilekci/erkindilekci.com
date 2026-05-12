import About from "./About.jsx";
import CaseStudies from "./CaseStudies.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Skills from "./Skills.jsx";

export default function Main() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <CaseStudies />
            <Resume />
            <Certifications />
            <Contact />
        </main>
    );
}
