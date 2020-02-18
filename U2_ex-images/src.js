// F
let image1 = document.querySelectorAll(".image1")
anime({
    targets: image1,
    translateX: {
        value: 100,
        duration: 1000,
        easing: 'easeInOutBack'
    },
    translateY: {
        value: 50,
        duration: 800,
        easing: 'easeInOutBack'
    },
    rotate: {
        value: '365',
        duration: 800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 1.5,
        duration: 1400,
        delay: 1000,
        easing: 'easeOutBack'
    },
    loop: true,
    direction: 'alternate',
    delay: 500 // All properties except 'scale' inherit 250ms delay
});

// R
let image2 = document.querySelectorAll(".image2")
anime({
    targets: image2,
    translateX: {
        value: 70,
        duration: 800,
        delay: 500,
        easing: 'easeInOutBack'
    },
    translateY: {
        value: 220,
        duration: 800,
        delay: 1000,
        easing: 'easeOutBounce'
    },
    scale: {
        value: 1.4,
        duration: 1500,
        delay: 900,
        easing: 'easeInOutElastic'
    },
    loop: true,
    direction: 'alternate',
    delay: 500 // All properties except 'scale' inherit 250ms delay
});

//I
let image3 = document.querySelectorAll(".image3")
anime({
    targets: image3,
    translateX: {
        value: 250,
        duration: 1000,
        easing: 'easeInOutBack'
    },
    translateY: {
        value: -60,
        duration: 1800,
        easing: 'easeInOutBack'
    },
    skew: {
        value: -20,
        duration: 1000,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 1.9,
        duration: 1000,
        delay: 200,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 600 // All properties except 'scale' inherit 250ms delay
});

// D
let image4 = document.querySelectorAll(".image4")
anime({
    targets: image4,
    translateX: {
        value: -36,
        duration: 800,
        delay:1000,
        easing: 'steps(5)'
    },
    translateY: {
        value: 150,
        duration: 800,
        delay:1000,
        easing: 'steps(5)'
    },
    rotate: {
        value: '1turn',
        duration: 1200,
        delay:800,
        easing: 'steps(7)'
    },
    scale: {
        value: 1.6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutBounce'
    },
    loop: true,
    direction: 'alternate',
    delay: 100 // All properties except 'scale' inherit 250ms delay
});

// A
let image5 = document.querySelectorAll(".image5")
anime({
    targets: image5,
    translateX: {
        value: 245,
        duration: 800,
        delay:800,
        easing: 'easeInOutBack'
    },
    translateY: {
        value: 280,
        duration: 800,
        delay:1000,
        easing: 'easeInOutBack'
    },
    scale: {
        value: 1.5,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutBack'
    },
    loop: true,
    direction: 'alternate',
    delay: 200 // All properties except 'scale' inherit 250ms delay
});

// Y
let image6 = document.querySelectorAll(".image6")
anime({
    targets: image6,
    translateX: {
        value: 260,
        duration: 900,
        delay: 200,
        easing: 'easeInElastic'
    },
    translateY: {
        value: 60,
        duration: 600,
        delay: 300,
        easing: 'easeOutElastic'
    },
    rotate: {
        value:-10,
        duration: 1000,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 1.7,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutElastic'
    },
    loop: true,
    direction: 'alternate',
    delay: 600 // All properties except 'scale' inherit 250ms delay
});