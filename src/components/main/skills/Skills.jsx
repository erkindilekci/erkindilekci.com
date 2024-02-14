import SkillsContent from "./SkillsContent.jsx";
import skills from "../../../assets/data/skills.js";

function Skills() {
    return (
        <section
            id="skills"
            className="container mb-32 flex min-h-screen flex-col items-center transition-all">
            <div className="flex flex-col items-center transition-all">
                <span
                    className="mb-2 text-xs transition-all text-textColorLightTheme dark:text-textColorDarkTheme">My abilities</span>
                <h2 className="mb-16 text-center text-2xl font-semibold transition-all text-firstColor sm:text-xl">Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 transition-all lg:grid-cols-2">
                {skills.map(skill => {
                    return <SkillsContent title={skill.title} skills={skill.skills} key={skill.title}/>;
                })}
            </div>
        </section>
    );
}

export default Skills;

