import {useState} from "react";
import {BiBook, BiBriefcaseAlt2, BiCertification, BiHomeAlt, BiMessageSquareDetail} from 'react-icons/bi';
import {Link} from 'react-scroll';

// million-ignore
function Nav() {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

    const handleClick = (e, index) => {
        e.preventDefault();
        setActiveLinkIndex(index);
    };

    return (
        <div
            className="fixed transition-all z-20 mb-0 bottom-4 shadow-2xl flex items-center w-auto mx-auto rounded-full px-8 py-4 bg-[#EEDDDFCC] dark:bg-[#361C1ECC]">
            <ul className="flex items-center justify-between space-x-6">
                <li className={`cursor-pointer p-2 transition-all rounded-full ${activeLinkIndex === 0 && 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800'}`}>
                    <Link to="home" offset={-50} onClick={e => handleClick(e, 0)}>
                        <BiHomeAlt
                            className="text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme"/>
                    </Link>
                </li>

                <li className={`cursor-pointer p-2 transition-all rounded-full ${activeLinkIndex === 1 && 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800'}`}>
                    <Link to="skills" offset={-75} onClick={e => handleClick(e, 1)}>
                        <BiBook
                            className="text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme"/>
                    </Link>
                </li>

                <li className={`cursor-pointer p-2 transition-all rounded-full ${activeLinkIndex === 2 && 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800'}`}>
                    <Link to="projects" offset={-75} onClick={e => handleClick(e, 2)}>
                        <BiBriefcaseAlt2
                            className="text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme"/>
                    </Link>
                </li>

                <li className={`cursor-pointer p-2 transition-all rounded-full ${activeLinkIndex === 3 && 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800'}`}>
                    <Link to="certifications" offset={-75} onClick={e => handleClick(e, 3)}>
                        <BiCertification
                            className="text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme"/>
                    </Link>
                </li>

                <li className={`cursor-pointer p-2 transition-all rounded-full ${activeLinkIndex === 4 && 'shadow-lg bg-gradient-to-b from-pink-600 to-pink-800'}`}>
                    <Link to="contact" offset={-75} onClick={e => handleClick(e, 4)}>
                        <BiMessageSquareDetail
                            className="text-xl transition-all text-titleColorLightTheme dark:text-titleColorDarkTheme"/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
