import certifications from "../../../assets/data/certifications.js";
import CertificationCard from "./CertificationCard.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {useEffect, useState} from "react";

function Certifications() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 104);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="certifications"
                 className="-mb-16 min-h-screen w-full px-8 transition-all max-w-[480px] sm:p-4 md:mb-0 md:px-16 lg:max-w-[1100px]">
            <div className="flex flex-col items-center transition-all">
                <span
                    className="mb-2 text-xs transition-all text-textColorLightTheme dark:text-textColorDarkTheme">My certifications</span>
                <h2 className="mb-16 text-center text-2xl font-semibold transition-all text-firstColor sm:text-xl">Certificates</h2>
            </div>
            <Swiper
                style={{"--swiper-pagination-color": "#bc1052"}}
                spaceBetween={60}
                slidesPerView={isMobile ? 1 : 2}
                loop={true}
                modules={[Pagination]}
                pagination={{clickable: true}}
            >
                {certifications.map((certification, index) => (
                    <SwiperSlide className="w-48 sm:w-36" key={index}>
                        <CertificationCard certification={certification}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Certifications;