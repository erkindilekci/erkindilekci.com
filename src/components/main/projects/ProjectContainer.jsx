function ProjectContainer({project}) {
    return (
        <div
            className="w-auto rounded-3xl p-6 shadow-lg transition-all max-w-72 bg-containerColorLightTheme dark:bg-containerColorDarkTheme">
            {project.image && <img className="rounded-md transition-all" src={project.image} alt={project.title}/>}
            <h3 className="my-3 text-lg font-medium transition-all text-titleColorLightTheme dark:text-gray-100">{project.title}</h3>
            <ul>{project.technologies.map((t, i) => <li
                className="text-sm transition-all text-textColorLightTheme dark:text-textColorDarkTheme"
                key={i}>{t}</li>)}</ul>
        </div>
    );
}

export default ProjectContainer;