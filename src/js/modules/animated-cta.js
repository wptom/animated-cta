class AnimatedCTA {
    constructor(id) {
        this.id = id;
        this.body = window.document.querySelector('body');
        this.cta = document.getElementById(id);
        this.initEvents();
    }

    getPositionTop() {
        return Math.floor(this.cta.getBoundingClientRect().top);
    }

    getPositionBottom() {
        return Math.floor(this.cta.getBoundingClientRect().bottom);
    }

    getViewportDims(){
        return {
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        }
    }

    initEvents() {
        // BODY tag has to have class page-has-animated-cta in order to add Event listener.
        if (!this.body.classList.contains('page-has-animated-cta')) { return false; }

        document.addEventListener('scroll', (e) => {
            e.preventDefault();

            let ctaOffsetTop = this.getPositionTop();
            let ctaOffsetBottom = this.getPositionBottom();
            let viewportHeight = this.getViewportDims().viewportHeight;

            if (ctaOffsetTop <= (viewportHeight * 0.66) && ctaOffsetTop >= 0) {
                console.log('active', this.id, document.querySelector('body').classList);
                this.cta.classList.add('animated-cta-highlighted');
                this.body.classList.add('animated-cta-overlay');
            } else {
                console.log('inactive', this.id, document.querySelector('body').classList);
                this.cta.classList.remove('animated-cta-highlighted');
                this.body.classList.remove('animated-cta-overlay');
            }
        });
    }
}

export default AnimatedCTA;
