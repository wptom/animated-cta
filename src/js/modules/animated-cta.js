class AnimatedCTA {
    constructor() {
        this.initEvents();
    }

    initEvents() {
        // BODY tag has to have class page-has-animated-cta in order to add Event listener.
        if (document.body.classList.contains('page-has-animated-cta')) {
            window.addEventListener('scroll', () => {
                let ctaList = document.querySelectorAll('.animated-cta');

                for (let i = 0; i < ctaList.length; i++) {
                    if (ctaList[i].getBoundingClientRect().top <= (window.innerHeight * 0.66) && ctaList[i].getBoundingClientRect().top >= 0) {
                        ctaList[i].classList.add('animated-cta-highlighted');
                        document.body.classList.add('animated-cta-overlay--is-active');
                        break;
                    } else {
                        ctaList[i].classList.remove('animated-cta-highlighted');
                        document.body.classList.remove('animated-cta-overlay--is-active');
                    }
                }
            });
        }
    }
}

export default AnimatedCTA;
