import {useState} from "react";

function ProjectContainer({project}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="flex w-auto flex-col justify-between rounded-3xl p-6 shadow-lg transition-all max-w-72 bg-containerColorLightTheme dark:bg-containerColorDarkTheme"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsHovering(isClicked => !isClicked)}
        >
            <div>
                {project.image && <img className="rounded-md transition-all" src={project.image} alt={project.title}/>}
                <h3 className="my-2 text-base font-medium transition-all text-titleColorLightTheme dark:text-gray-100 md:my-3 md:text-lg">{project.title}</h3>
                <ul>{project.technologies.map((t, i) => <li
                    className="mb-auto text-xs transition-all py-[1px] text-textColorLightTheme dark:text-textColorDarkTheme md:text-sm"
                    key={i}>{t}</li>)}
                </ul>
            </div>

            <div className={`${!isHovering ? 'hidden' : 'flex'} w-full transition-all -mt-4 items-baseline ${project.links.length === 2 ? 'justify-between' : 'justify-center'}`}>
                {project.links.map((link, index) => (
                    <a href={link} target="_blank">
                        {index % 2 === 0
                            ? <button
                                className="text-xs rounded-lg border-2 border-solid bg-transparent px-4 py-2 transition-all border-firstColor text-titleColorLightTheme hover:bg-firstColorAlt dark:text-titleColorDarkTheme md:mt-10">GitHub</button>
                            : <button
                                className="text-xs rounded-lg px-4 transition-all bg-firstColor py-[0.55rem] text-titleColorLightTheme hover:bg-firstColorAlt dark:text-titleColorDarkTheme md:mt-6">Live
                                Demo</button>
                        }
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectContainer;

