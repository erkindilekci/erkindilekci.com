/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* SERVICES MODAL */
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach(mc => {
    mc.addEventListener('click', () => {
        modalViews.forEach(mv => {
            mv.classList.remove('active-modal');
        });
    });
});

/* MIXITUP FILTER PORTFOLIO */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/* SWIPER TESTIMONIAL */
let swiperTestimonial = new Swiper('.testimonial__container', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48
        }
    }
});

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/* LIGHT DARK THEME */
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'dark' : 'light');
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    deplay: 400
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {deplay: 700});
sr.reveal(`.home__social, .home__scroll`, {deplay: 900, origin: 'bottom'});
sr.reveal(``);


/* JSON */
fetch('assets/data/skills.json')
    .then(response => response.json())
    .then(data => {
        const divideArray = arr => {
            const mid = Math.ceil(arr.length / 2);
            return [arr.slice(0, mid), arr.slice(mid)];
        };

        const createSkillsContent = (title, skills) => {
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('skills__content');

            const titleElement = document.createElement('h3');
            titleElement.classList.add('skills__title');
            titleElement.textContent = title;
            contentDiv.appendChild(titleElement);

            const boxDiv = document.createElement('div');
            boxDiv.classList.add('skills__box');

            const [group1Skills, group2Skills] = divideArray(skills);

            const group1Div = document.createElement('div');
            group1Div.classList.add('skills_group');
            group1Skills.forEach(skill => {
                const dataDiv = document.createElement('div');
                dataDiv.classList.add('skills__data');
                const iconElement = document.createElement('i');
                iconElement.classList.add('bx', 'bxs-badge-check');
                const nameDiv = document.createElement('div');
                const nameElement = document.createElement('h3');
                nameElement.classList.add('skills__name');
                nameElement.textContent = skill;

                nameDiv.appendChild(nameElement);
                dataDiv.appendChild(iconElement);
                dataDiv.appendChild(nameDiv);
                group1Div.appendChild(dataDiv);
            });

            const group2Div = document.createElement('div');
            group2Div.classList.add('skills_group');
            group2Skills.forEach(skill => {
                const dataDiv = document.createElement('div');
                dataDiv.classList.add('skills__data');
                const iconElement = document.createElement('i');
                iconElement.classList.add('bx', 'bxs-badge-check');
                const nameDiv = document.createElement('div');
                const nameElement = document.createElement('h3');
                nameElement.classList.add('skills__name');
                nameElement.textContent = skill;

                nameDiv.appendChild(nameElement);
                dataDiv.appendChild(iconElement);
                dataDiv.appendChild(nameDiv);
                group2Div.appendChild(dataDiv);
            });

            boxDiv.appendChild(group1Div);
            boxDiv.appendChild(group2Div);
            contentDiv.appendChild(boxDiv);
            return contentDiv;
        };

        const skillsContainer = document.querySelector('.skills__container');

        skillsContainer.appendChild(createSkillsContent('Backend', data.backend));
        skillsContainer.appendChild(createSkillsContent('Frontend', data.frontend));
        skillsContainer.appendChild(createSkillsContent('Mobile', data.mobile));
        skillsContainer.appendChild(createSkillsContent('Tools', data.tools));
    })
    .catch(error => {
        console.error('Error fetching or parsing skills data:', error);
    });


fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const workContainer = document.querySelector('.work__container');

        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('work__card', 'mix', project.category);

            const image = document.createElement('img');
            if (project.image !== '') {
                image.src = project.image;
                image.alt = `Screenshot of ${project.title} app`;
                image.classList.add('work__img');
                card.appendChild(image);
            }

            const title = document.createElement('h3');
            title.textContent = project.title;
            title.classList.add('work__title');
            card.appendChild(title);

            const techList = document.createElement('ul');
            project.technologies.forEach(tech => {
                const listItem = document.createElement('li');
                listItem.textContent = tech;
                techList.appendChild(listItem);
            });
            card.appendChild(techList);

            workContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing projects data:', error);
    });

fetch('assets/data/certifications.json')
    .then(response => response.json())
    .then(data => {
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        data.forEach(certification => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('testimonial__card');
            cardDiv.classList.add('swiper-slide');

            const link = document.createElement('a');
            link.href = certification.courseUrl;
            link.target = '_blank';

            const img = document.createElement('img');
            img.src = certification.imageUrl;
            img.classList.add('testimonial__img');

            const name = document.createElement('h3');
            name.classList.add('testimonial__name');
            name.textContent = certification.courseName;

            link.appendChild(img);
            cardDiv.appendChild(link);
            cardDiv.appendChild(name);

            swiperWrapper.appendChild(cardDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
