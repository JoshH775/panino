import { animate, stagger } from 'motion'

 function animateLogo() {
    const logo = document.querySelectorAll('.logo')
    
    animate(
        logo,
        {
            scale: [0.5, 1],
            rotate: [-90, 0],
        },
        {
            scale: { duration: 1, ease: 'easeOut' },
            rotate: { duration: 1, ease: 'easeOut' },
        },
    )
}

 function animateFadeUp() {
    const elements = document.querySelectorAll('.fade-up')
    
    animate(
        elements,
        {
            opacity: [0, 1],
            y: [20, 0],
            filter: ['blur(10px)', 'blur(0)'],
        },
        {
           duration: 0.5,
            ease: 'easeOut',
            delay: stagger(0.35)
        },
    )
}

export function animateAll() {
    animateLogo()
    animateFadeUp()
}