import {FiMoon, FiSun} from 'react-icons/fi';

export default function Header({theme, toggleTheme}) {
    return (
        <header
            className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 transition-all bg-bodyColorLightTheme text-black-700 shadow-lightTheme dark:shadow-darkTheme dark:bg-bodyColorDarkTheme dark:text-white md:justify-evenly md:px-8 md:py-4 lg:justify-around">
            <h1 className="cursor-pointer text-2xl font-medium transition-all text-firstColor hover:text-firstColorAlt">Erkin
                Dilekçi</h1>
            {theme === 'light'
                ? <FiMoon className="cursor-pointer text-xl text-black transition-all hover:text-firstColor"
                          onClick={toggleTheme}/>
                : <FiSun className="cursor-pointer text-xl text-white transition-all hover:text-firstColor"
                         onClick={toggleTheme}/>}
        </header>
    );
}
