import projects from "../../../assets/data/projects.js";
import ProjectContainer from "./ProjectContainer.jsx";
import {useState} from "react";

function Projects() {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [projectList, setProjectList] = useState(projects);

    const handleClick = (index, category) => {
        setActiveButtonIndex(index);
        setProjectList(projects.filter(project => project.category.includes(category)));
    };

    return (
        <section id="projects" className="container mb-32 flex min-h-screen flex-col items-center">
            <div className="flex flex-col items-center transition-all">
                <span
                    className="mb-2 text-xs transition-all text-textColorLightTheme dark:text-textColorDarkTheme">My portfolio</span>
                <h2 className="mb-10 text-center text-2xl font-semibold transition-all text-firstColor sm:text-xl">Projects</h2>
            </div>
            <div className="mb-12 md:mb-16 flex w-full items-center justify-center transition-all space-x-8">
                <button
                    onClick={() => handleClick(0, 'all')}
                    className={`transition-all text-sm md:text-base text-textColorLightTheme dark:text-textColorDarkTheme px-3 py-1 font-medium rounded-md ${activeButtonIndex === 0 && 'bg-firstColor text-bodyColorLightTheme dark:text-bodyColorDarkTheme'}`}>All
                </button>
                <button
                    onClick={() => handleClick(1, 'web')}
                    className={`transition-all text-sm md:text-base text-textColorLightTheme dark:text-titleColorDarkTheme px-3 py-1 font-medium rounded-md ${activeButtonIndex === 1 && 'bg-firstColor text-bodyColorLightTheme dark:text-bodyColorDarkTheme'}`}>Web
                </button>
                <button
                    onClick={() => handleClick(2, 'mobile')}
                    className={`transition-all text-sm md:text-base text-textColorLightTheme dark:text-titleColorDarkTheme px-3 py-1 font-medium rounded-md ${activeButtonIndex === 2 && 'bg-firstColor text-bodyColorLightTheme dark:text-bodyColorDarkTheme'}`}>Mobile
                </button>
            </div>
            <div className="grid grid-cols-1 gap-8 transition-all md:grid-cols-2 lg:grid-cols-3">
                {projectList.map(project => <ProjectContainer project={project}/>)}
            </div>
        </section>
    );
}

export default Projects;