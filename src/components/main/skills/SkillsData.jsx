import { BiBadgeCheck } from "react-icons/bi";

function SkillsData({ skill }) {
    return (<div className="flex items-center gap-x-4 transition-all">
        <BiBadgeCheck
            className="flex-shrink-0 text-sm text-textColorLightTheme dark:text-textColorDarkTheme md:text-base"/>
        <h3 className="my-3 flex-shrink-0 break-words p-0 text-xs font-medium leading-5 text-black transition-all dark:text-white md:text-sm">{skill}</h3>
    </div>);
}

export default SkillsData;
