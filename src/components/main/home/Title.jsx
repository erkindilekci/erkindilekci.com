import { Link } from "react-scroll";

export default function Title() {
    const downloadCV = () => {
        window.location.href = "/ErkinDilekci.pdf";
    };

    return (
        <article className="-mt-16 flex h-screen flex-col items-center justify-center transition-all">
            <h5 className="font-medium transition-all text-s text-titleColorLightTheme dark:text-[#f5f5f5] md:text-[0.9rem] md:mb-3">Hello,
                I'm</h5>
            <h3 className="text-2xl font-semibold text-black transition-all dark:text-gray-100 md:mb-3 md:text-4xl">Erkin
                Dilekçi</h3>
            <h4 className="font-medium transition-all text-m text-textColorLightTheme dark:text-[#f5f5f5] md:text-[0.9rem]">Full
                Stack Developer</h4>

            <div className="flex flex-col items-center transition-all md:space-x-6 md:flex-row md:items-baseline">
                <button
                    className="mt-8 rounded-lg border-2 border-solid bg-transparent px-4 py-2 transition-all border-textColorLightTheme dark:border-textColorDarkTheme text-textColorLightTheme hover:bg-firstColorAlt dark:hover:bg-[#434343] dark:text-textColorDarkTheme md:mt-10"
                    onClick={downloadCV}>Download CV
                </button>
                <Link to="contact" offset={-75}>
                    <button
                        className="mt-4 rounded-lg px-4 transition-all bg-textColorLightTheme dark:bg-textColorDarkTheme py-[0.55rem] text-textColorDarkTheme hover:bg-[#434343] dark:text-textColorLightTheme md:mt-6 dark:hover:bg-firstColorAlt">Contact
                        Me
                    </button>
                </Link>
            </div>
        </article>
    );
}
