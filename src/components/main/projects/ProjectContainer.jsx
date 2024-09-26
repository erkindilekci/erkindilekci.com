import { useState } from "react";

function ProjectContainer({ project, hasTouchScreen }) {
    const [isHovering, setIsHovering] = useState(true);

    return (
        <div
            className="flex overflow-hidden w-auto flex-col justify-between rounded-3xl p-6 shadow-lightTheme dark:shadow-darkTheme transition-all max-w-72 bg-containerColorLightTheme dark:bg-containerColorDarkTheme"
            // onMouseEnter={() => !hasTouchScreen && setIsHovering(true)}
            // onMouseLeave={() => !hasTouchScreen && setIsHovering(false)}
            // onClick={() => hasTouchScreen && setIsHovering(isClicked => !isClicked)}
        >
            <div>
                {project.image && <img className="rounded-md transition-all" src={project.image} alt={project.title}/>}
                <h3 className="my-2 text-base font-medium transition-all text-titleColorLightTheme dark:text-gray-100 md:my-3 md:text-lg">{project.title}</h3>
                <ul className="mb-3 md:mb-0">{project.technologies.map((t, i) => <li
                    className="text-xs transition-all py-[1px] text-textColorLightTheme dark:text-textColorDarkTheme md:text-sm"
                    key={i}>{t}</li>)}
                </ul>
            </div>

            <div
                id="links"
                className={`${!isHovering ? 'opacity-0 -mb-16' : 'opacity-100 mb-0'} flex w-full transition-all duration-500 mt-4 md:-mt-4 items-baseline ${project.links.length === 2 ? 'justify-between' : 'justify-center'}`}>
                {project.links.map((link, index) => (
                    <a href={link} target="_blank">
                        {index % 2 === 0
                            ? <button
                                className="text-xs md:text-sm rounded-lg border-2 border-solid bg-transparent px-4 py-2 transition-all border-textColorLightTheme dark:border-textColorDarkTheme text-textColorLightTheme hover:bg-firstColorAlt dark:hover:bg-[#434343] dark:text-textColorDarkTheme md:mt-10">GitHub</button>
                            : <button
                                className="text-xs md:text-sm rounded-lg px-4 transition-all bg-textColorLightTheme dark:bg-textColorDarkTheme py-[0.55rem] text-textColorDarkTheme hover:bg-[#434343] dark:text-textColorLightTheme dark:hover:bg-firstColorAlt md:mt-6">Live
                                Demo</button>
                        }
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectContainer;
