export default function Title() {
    const downloadCV = () => {
        window.location.href = "/ErkinDilekci.pdf";
    };

    return (
        <article className="-mt-16 flex h-screen flex-col items-center justify-center transition-all">
            <h5 className="font-medium transition-all text-s text-titleColorLightTheme dark:text-titleColorDarkTheme md:text-[0.9rem] md:mb-3">Hello,
                I'm</h5>
            <h3 className="text-2xl font-semibold text-black transition-all dark:text-gray-100 md:mb-3 md:text-4xl">Erkin
                Dilekçi</h3>
            <h4 className="font-medium transition-all text-m text-textColorLightTheme dark:text-textColorDarkTheme md:text-[0.9rem]">Full
                Stack Developer</h4>

            <div className="flex flex-col items-center transition-all md:space-x-6 md:flex-row md:items-baseline">
                <button
                    className="mt-8 rounded-lg border-2 border-solid bg-transparent px-4 py-2 transition-all transition-colors border-firstColor text-titleColorLightTheme hover:bg-firstColorAlt dark:text-titleColorDarkTheme md:mt-10"
                    onClick={downloadCV}>Download CV
                </button>
                <button
                    className="mt-4 rounded-lg px-4 text-black transition-all transition-colors bg-firstColor py-[0.55rem] text-titleColorLightTheme hover:bg-firstColorAlt dark:text-titleColorDarkTheme md:mt-6"
                    onClick={downloadCV}>Contact Me
                </button>
            </div>
        </article>
    );
}