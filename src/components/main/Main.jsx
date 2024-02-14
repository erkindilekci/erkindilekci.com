import Nav from "./nav/Nav.jsx";
import Home from "./home/Home.jsx";
import Skills from "./skills/Skills.jsx";
import Certifications from "./certifications/Certifications.jsx";
import Projects from "./projects/Projects.jsx";
import Contact from "./contact/Contact.jsx";

export default function Main() {
    return (
        <main
            className="flex w-screen flex-col items-center transition-all bg-bodyColorLightTheme dark:bg-bodyColorDarkTheme">
            <Home/>
            <Skills/>
            <Projects/>
            <Certifications/>
            <Contact/>
            <Nav/>
        </main>
    );
}