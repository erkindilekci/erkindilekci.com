import {BiLogoLinkedin, BiMailSend, BiRightArrowAlt} from "react-icons/bi";

function Contact() {
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
                        className="h-48 w-80 rounded-xl p-8 text-center shadow-lg bg-containerColorLightTheme dark:bg-containerColorDarkTheme">
                        <BiMailSend className="mx-auto mb-2 text-4xl text-title-color dark:text-gray-100"/>
                        <h3 className="mb-2 font-medium text-small-font-size dark:text-gray-100">Email</h3>
                        <span
                            className="mb-3 block text-sm text-titleColorLightTheme dark:text-titleColorDarkTheme">dilekcierkin@gmail.com</span>
                        <a href="mailto:dilekcierkin@gmail.com" target="_blank" rel="noopener noreferrer"
                           className="flex items-center justify-center contact__button text-first-color space-x-1 text-firstColor">
                            Send mail
                            <BiRightArrowAlt className="text-lg transition-all duration-400"/>
                        </a>
                    </div>

                    <div
                        className="h-48 w-80 rounded-xl p-8 text-center shadow-lg bg-containerColorLightTheme dark:bg-containerColorDarkTheme">
                        <BiLogoLinkedin className="mx-auto mb-2 text-4xl text-title-color dark:text-gray-100"/>
                        <h3 className="mb-2 font-medium text-small-font-size dark:text-gray-100">Linkedin</h3>
                        <span
                            className="mb-3 block text-sm text-titleColorLightTheme dark:text-titleColorDarkTheme">linkedin.com/in/erkindilekci/</span>
                        <a href="https://www.linkedin.com/in/erkindilekci/" target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center contact__button text-first-color space-x-1 text-firstColor">
                            Send message
                            <BiRightArrowAlt className="text-lg transition-all duration-400"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;