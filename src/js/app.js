document.addEventListener('DOMContentLoaded', function () {
    const specialists = new Swiper('.specialists-slider', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.specialists-slider__arrow--next',
            prevEl: '.specialists-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: "auto"
            },
            1370: {
                slidesPerView: 3,
            },
        }
    });

    const gallery = new Swiper('.gallery-slider', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.gallery-slider__arrow--next',
            prevEl: '.gallery-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
            575: {
                slidesPerView: "auto"
            },
            992: {
                slidesPerView: 3,
            },
        }
    });

    const reviews = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews-slider__arrow--next',
            prevEl: '.reviews-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: "auto"
            },
            992: {
                slidesPerView: 3,
            },
        }
    });


    let questions = document.querySelectorAll('.questions-item__title')

    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.nextSibling.nextSibling.classList.toggle('active');
        })
    })


    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    });

    // функция для модалки

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
            modal_ = document.querySelector(modal),
            modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });

            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__container')) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal', 'modal--active', '[data-modal]', '.modal__close');

// Accordion
    const tabs = document.querySelector('.modal-content');
    const tabsBtn = document.querySelectorAll('.modal-triggers__item');
    const tabsContent = document.querySelectorAll('.modal-content__form');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-triggers__item')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => {
                    el.classList.remove('modal-triggers__item--active')
                });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('modal-triggers__item--active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => {
            el.classList.remove('modal-content__form--active')
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('modal-content__form--active');
    };



    const certificates = new Swiper('.certificates-slider', {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.certificates-slider__arrow--next',
            prevEl: '.certificates-slider__arrow--prev',
        },
    });
});