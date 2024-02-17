import {BiLogoLinkedin, BiMailSend, BiRightArrowAlt} from "react-icons/bi";

function Contact() {
    const divClasses = 'h-48 w-80 rounded-xl p-8 text-center shadow-lg bg-containerColorLightTheme dark:bg-containerColorDarkTheme';
    const iconClasses = 'mx-auto mb-2 text-4xl text-title-color dark:text-gray-100';
    const titleClasses = 'mb-2 font-medium text-small-font-size dark:text-gray-100';
    const spanClasses = 'mb-3 block text-sm text-titleColorLightTheme dark:text-titleColorDarkTheme';
    const linkClasses = 'flex items-center justify-center contact__button text-first-color space-x-1 text-firstColor';
    const smallIconClasses = 'text-lg transition-all duration-400';

    return (
        <section id="contact" className="min-h-screen w-full p-4 transition-all">
            <div className="flex flex-col items-center transition-all">
                <span className="mb-2 text-xs transition-all text-textColorLightTheme dark:text-textColorDarkTheme">Get in touch</span>
                <h2 className="mb-16 text-center text-2xl font-semibold transition-all text-firstColor sm:text-xl">Contact
                    Me</h2>
            </div>

            <div className="container mx-auto flex w-full flex-col items-center pb-12 space-y-12">
                <div
                    className="flex flex-col flex-wrap items-center justify-center contact__info space-y-4 md:space-x-8 md:flex-row md:items-baseline">
                    <div
                        className={divClasses}>
                        <BiMailSend className={iconClasses}/>
                        <h3 className={titleClasses}>Email</h3>
                        <span className={spanClasses}>dilekcierkin@gmail.com</span>
                        <a href="mailto:dilekcierkin@gmail.com" target="_blank" rel="noopener noreferrer"
                           className={linkClasses}>
                            Send mail
                            <BiRightArrowAlt className={smallIconClasses}/>
                        </a>
                    </div>

                    <div className={divClasses}>
                        <BiLogoLinkedin className={iconClasses}/>
                        <h3 className={titleClasses}>Linkedin</h3>
                        <span className={spanClasses}>linkedin.com/in/erkindilekci/</span>
                        <a href="https://www.linkedin.com/in/erkindilekci/" target="_blank"
                           rel="noopener noreferrer"
                           className={linkClasses}>
                            Send message
                            <BiRightArrowAlt className={smallIconClasses}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;