import { useState } from "react";
import { BiBook, BiBriefcaseAlt2, BiCertification, BiHomeAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from 'react-scroll';

// million-ignore
function Nav() {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

    const buttonClasses = 'cursor-pointer p-2 transition-all rounded-full';
    const activeButtonClasses = 'shadow-lg  bg-gradient-to-b from-black to-[#555555] dark:from-white dark:to-[#7b7b7b]';
    const iconClasses = "text-xl transition-all";

    return (
        <div
            className="fixed transition-all z-20 mb-0 bottom-4 shadow-2xl flex items-center w-auto mx-auto rounded-full px-8 py-4 bg-[#fafafa] dark:bg-containerColorDarkTheme">
            <ul className="flex items-center justify-between space-x-6">
                <li className={`${buttonClasses} ${activeLinkIndex === 0 && activeButtonClasses}`}>
                    <Link to="home" offset={-50} spy={true} onSetActive={() => setActiveLinkIndex(0)}>
                        <BiHomeAlt
                            className={`${iconClasses} ${activeLinkIndex === 0 ? 'text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 1 && activeButtonClasses}`}>
                    <Link to="skills" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(1)}>
                        <BiBook
                            className={`${iconClasses} ${activeLinkIndex === 1 ? 'text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 2 && activeButtonClasses}`}>
                    <Link to="projects" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(2)}>
                        <BiBriefcaseAlt2
                            className={`${iconClasses} ${activeLinkIndex === 2 ? 'text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 3 && activeButtonClasses}`}>
                    <Link to="certifications" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(3)}>
                        <BiCertification
                            className={`${iconClasses} ${activeLinkIndex === 3 ? 'text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 4 && activeButtonClasses}`}>
                    <Link to="contact" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(4)}>
                        <BiMessageSquareDetail
                            className={`${iconClasses} ${activeLinkIndex === 4 ? 'text-textColorDarkTheme dark:text-textColorLightTheme' : 'text-textColorLightTheme dark:text-textColorDarkTheme'}`}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
