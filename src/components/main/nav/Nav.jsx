import {useState} from "react";
import {BiBook, BiBriefcaseAlt2, BiCertification, BiHomeAlt, BiMessageSquareDetail} from 'react-icons/bi';
import {Link} from 'react-scroll';

// million-ignore
function Nav() {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

    const buttonClasses = 'cursor-pointer p-2 transition-all rounded-full';
    const activeButtonClasses = 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800';
    const iconClasses = "text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme";

    return (
        <div
            className="fixed transition-all z-20 mb-0 bottom-4 shadow-2xl flex items-center w-auto mx-auto rounded-full px-8 py-4 bg-[#EEDDDFCC] dark:bg-[#361C1ECC]">
            <ul className="flex items-center justify-between space-x-6">
                <li className={`${buttonClasses} ${activeLinkIndex === 0 && activeButtonClasses}`}>
                    <Link to="home" offset={-50} spy={true} onSetActive={() => setActiveLinkIndex(0)}>
                        <BiHomeAlt className={iconClasses}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 1 && activeButtonClasses}`}>
                    <Link to="skills" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(1)}>
                        <BiBook className={iconClasses}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 2 && activeButtonClasses}`}>
                    <Link to="projects" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(2)}>
                        <BiBriefcaseAlt2 className={iconClasses}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 3 && activeButtonClasses}`}>
                    <Link to="certifications" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(3)}>
                        <BiCertification className={iconClasses}/>
                    </Link>
                </li>

                <li className={`${buttonClasses} ${activeLinkIndex === 4 && activeButtonClasses}`}>
                    <Link to="contact" offset={-75} spy={true} onSetActive={() => setActiveLinkIndex(4)}>
                        <BiMessageSquareDetail className={iconClasses}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
