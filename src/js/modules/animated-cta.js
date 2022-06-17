class AnimatedCTA {
    constructor() {
        this.initEvents();
    }

    initEvents() {
        let cta = document.getElementById('animated-cta');

        const getPosition = () => {
            return Math.floor(cta.getBoundingClientRect().top);
        }

        const getViewportDims = () => {
            return {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight
            }
        }

        document.addEventListener('scroll', (e) => {
            let ctaOffsetTop = getPosition();
            let viewportHeight = getViewportDims().viewportHeight;

            if (ctaOffsetTop >= (viewportHeight * 0.33) && ctaOffsetTop <= (viewportHeight * 0.66)) {
                cta.classList.add('highlighted');
            } else {
                cta.classList.remove('highlighted');
            }
        })
    }
}

export default AnimatedCTA;
