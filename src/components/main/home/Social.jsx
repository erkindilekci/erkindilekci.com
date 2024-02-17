import {BiLogoGithub, BiLogoLinkedinSquare, BiLogoPlayStore} from "react-icons/bi";

function Social() {
    const linkClasses = 'flex w-max rounded-sm p-1 text-base transition-all bg-containerColorLightTheme text-firstColor hover:bg-firstColor hover:text-white dark:bg-containerColorDarkTheme';

    return (
        <div
            className="absolute bottom-72 left-0 after:mt-4 grid after:w-8 after:rotate-90 gap-y-2 transition-all after:h-0.5 after:ml-[-2px] after:bg-firstColor md:bottom-40">
            <a href="https://www.linkedin.com/in/erkindilekci/" target="_blank"
               className={linkClasses}>
                <BiLogoLinkedinSquare className="text-xl"/>
            </a>
            <a href="https://github.com/erkindilekci" target="_blank"
               className={linkClasses}>
                <BiLogoGithub className="text-xl"/>
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Erkin+Dilekci" target="_blank"
               className={linkClasses}>
                <BiLogoPlayStore className="text-xl"/>
            </a>
        </div>
    );
}

export default Social;