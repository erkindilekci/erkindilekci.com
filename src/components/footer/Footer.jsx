import { BiLogoGithub, BiLogoLinkedin, BiLogoPlayStore } from "react-icons/bi";
import { Link } from "react-scroll";

function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-containerColorDarkTheme">
            <div className="container mx-auto px-4 py-8 pb-24">
                <h1 className="mb-8 text-center text-3xl  text-textColorLightTheme dark:text-textColorDarkTheme  font-semibold">Erkin
                    Dilekçi</h1>
                <ul className="mb-8 flex justify-center space-x-6">
                    <li>
                        <Link to="skills" offset={-75}
                              className="cursor-pointer text-textColorLightTheme dark:text-textColorDarkTheme">Skills</Link>
                    </li>
                    <li>
                        <Link to="projects" offset={-75}
                              className="cursor-pointer text-textColorLightTheme dark:text-textColorDarkTheme ">Projects</Link>
                    </li>
                    <li>
                        <Link to="certifications" offset={-75}
                              className="cursor-pointer text-textColorLightTheme dark:text-textColorDarkTheme ">Certificates</Link>
                    </li>
                </ul>

                <ul className="mb-6 flex justify-center space-x-6">
                    <li>
                        <a href="https://www.linkedin.com/in/erkindilekci/" target="_blank"
                           className="inline-flex rounded-lg text-lg p-1.5 bg-bodyColorDarkTheme">
                            <BiLogoLinkedin
                                className="text-2xl text-textColorDarkTheme"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/erkindilekci" target="_blank"
                           className="inline-flex rounded-lg text-lg p-1.5 bg-bodyColorDarkTheme">
                            <BiLogoGithub className="text-2xl  text-textColorDarkTheme "/>
                        </a>
                    </li>
                    <li>
                        <a href="https://play.google.com/store/apps/developer?id=Erkin+Dilekci" target="_blank"
                           className="inline-flex rounded-lg p-1.5 bg-bodyColorDarkTheme">
                            <BiLogoPlayStore
                                className="text-2xl  text-textColorDarkTheme "/>
                        </a>
                    </li>
                </ul>

                <span className="block text-center text-sm mt-18 text-containerColorDarkTheme">&#169; Erkin Dilekci. All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;
