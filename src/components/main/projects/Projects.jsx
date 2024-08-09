import projects from "../../../assets/data/projects.js";
import ProjectContainer from "./ProjectContainer.jsx";
import { useEffect, useState } from "react";

function Projects() {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [projectList, setProjectList] = useState(projects);
    const [hasTouchScreen, setHasTouchScreen] = useState(false);

    const filterButtonClasses = "className={`transition-all text-sm md:text-base px-3 py-1 font-medium rounded-md ${activeButtonIndex === 0 ? 'bg-textColorLightTheme dark:bg-textColorDarkTheme text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}";

    useEffect(() => {
        let touchScreen = false;

        if ("maxTouchPoints" in navigator) {
            touchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            touchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                touchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                touchScreen = true;
            } else {
                let UA = navigator.userAgent;
                touchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                );
            }
            setHasTouchScreen(touchScreen);
        }
    }, []);

    const handleClick = (index, category) => {
        setActiveButtonIndex(index);
        setProjectList(projects.filter(project => project.category.includes(category)));
    };

    return (
        <section id="projects" className="container mb-32 flex min-h-screen flex-col items-center">
            <div className="flex flex-col items-center transition-all">
                <span
                    className="mb-2 text-xs transition-all text-textColorLightTheme dark:text-textColorDarkTheme">My portfolio</span>
                <h2 className="mb-10 text-center text-2xl font-semibold transition-all text-titleColorLightTheme dark:text-gray-100 sm:text-xl">Projects</h2>
            </div>
            <div className="mb-12 flex w-full items-center justify-center transition-all space-x-8 md:mb-16">
                <button
                    onClick={() => handleClick(0, 'all')}
                    className={`transition-all text-sm md:text-base px-3 py-1 font-medium rounded-md ${activeButtonIndex === 0 ? 'bg-textColorLightTheme dark:bg-textColorDarkTheme text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}>All
                </button>
                <button
                    onClick={() => handleClick(1, 'web')}
                    className={`transition-all text-sm md:text-base px-3 py-1 font-medium rounded-md ${activeButtonIndex === 1 ? 'bg-textColorLightTheme dark:bg-textColorDarkTheme text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}>Web
                </button>
                <button
                    onClick={() => handleClick(2, 'mobile')}
                    className={`transition-all text-sm md:text-base px-3 py-1 font-medium rounded-md ${activeButtonIndex === 2 ? 'bg-textColorLightTheme dark:bg-textColorDarkTheme text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}>Mobile
                </button>
            </div>
            <div className="grid grid-cols-1 gap-8 transition-all md:grid-cols-2 lg:grid-cols-3">
                {projectList.map(project => <ProjectContainer project={project} hasTouchScreen={hasTouchScreen}/>)}
            </div>
        </section>
    );
}

export default Projects;
