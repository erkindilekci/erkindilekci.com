import {useEffect, useState} from 'react';
import {FiMoon, FiSun} from 'react-icons/fi';

export default function Header({theme, toggleTheme}) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScroll = () => setIsScrolled(window.scrollY > 0);

        window.addEventListener('scroll', checkScroll);

        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 flex items-center justify-between px-4 py-3 transition-all bg-bodyColorLightTheme text-black-700 ${isScrolled && 'shadow-lightTheme dark:shadow-darkTheme'} dark:bg-bodyColorDarkTheme dark:text-white md:justify-evenly md:px-8 md:py-4 lg:justify-around`}
        >
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