import SkillsData from "./SkillsData.jsx";

function SkillsContent({ title, skills }) {
    const divideArray = arr => {
        const mid = Math.ceil(arr.length / 2);
        return [arr.slice(0, mid), arr.slice(mid)];
    };

    const [firstHalf, secondHalf] = divideArray(skills);

    return (
        <div
            className="mx-6 flex w-auto flex-col items-center rounded-3xl p-6 shadow-lightTheme dark:shadow-darkTheme transition-all max-w-[450px] bg-containerColorLightTheme dark:bg-containerColorDarkTheme">
            <h3 className="mb-2 text-sm font-medium capitalize transition-all text-textColorLightTheme dark:text-textColorDarkTheme md:text-base">{title}</h3>
            <div className="grid grid-cols-2 gap-x-8 transition-all">
                <div className="mx-auto grid items-start p-4 transition-all gap-1.5">
                    {firstHalf.map(skill => {
                        return <SkillsData skill={skill} key={skill}/>;
                    })}
                </div>
                <div className="mx-auto grid items-start p-4 transition-all gap-1.5">
                    {secondHalf.map(skill => {
                        return <SkillsData skill={skill} key={skill}/>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsContent;
