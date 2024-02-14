function CertificationCard({certification}) {
    return (
        <div
            className="w-full rounded-3xl px-4 pt-8 shadow-lg transition-all bg-containerColorLightTheme dark:bg-containerColorDarkTheme">
            <a href={certification.courseUrl} target="_blank">
                <img src={certification.imageUrl} className="w-full rounded-md transition-all"
                     alt={certification.courseName}/>
            </a>
            <h3 className="mb-16 pb-4 text-center text-base font-medium text-black transition-all mt-2.5 dark:text-gray-100 md:mb-10 md:text-xl">{certification.courseName}</h3>
        </div>
    );
}

export default CertificationCard;
