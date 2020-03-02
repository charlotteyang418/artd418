// retrieve all the SVG paths in the html
var cloudPath = document.querySelectorAll('.st84');
var cloud = document.querySelectorAll('.cloud');
var els = document.querySelector('.st0 .st1 .st2 .st3 .st4 .st5 .st6 .st7 .st8 .st9 .st10 .st11 .st12 .st13 .st14 .st15 .st16 .st17 .st18 .st19 .st20 .st21 .st22 .st23 .st24 .st25 .st26 .st27 .st28 .st29 .st30 .st31 .st32 .st33 .st34 .st35 .st36 .st37 .st38 .st39 .st40 .st41 .st42 .st43 .st44 .st45 .st46 .st47 .st48 .st49 .st50 .st51 .st52 .st53 .st54 .st55 .st56 .st57 .st58 .st59 .st60 .st61 .st62 .st63 .st64 .st65 .st66 .st67 .st68 .st69 .st70 .st71 .st72 .st73 .st74 .st75 .st76 .st77 .st78 .st79 .st80 .st81 .st82 .st83')

let scrollPosition = 0;

var myPath = anime.path(cloudPath[0]);

let animatedCloud;



function setup(){
    
    animatedCloud = anime({
        targets: cloud[0],
        translateX: myPath('x'),
        translateY: myPath('y'),
        scale: 0.6,
        easing: 'linear',
        duration: 10000,
        loop: true
    });
    
    scrollPlay();
}


function scrollPlay() {
    // refresh the scroll position
    window.requestAnimationFrame(scrollPlay);

    // retrieve the current scroll position
    scrollPosition = window.pageYOffset;

    // offsetCorrection
    let yOffsetCorrection = 0

    // get the frame for the current scroll position plus Y correction 
    let frame = scrollConvertion(scrollPosition + yOffsetCorrection);

    // animate all the paths
   
    if (scrollPosition < 687){
        animatedCloud.seek(frame)
    } else {
        myExplosion()
    }
    
    console.log(scrollPosition)
}

function scrollConvertion(scrollPosition) {
    let totalHeight = document.body.clientHeight - window.height;
    let nFrames = 19000;
    return Math.floor((scrollPosition / totalHeight) * nFrames);
}

function myExplosion(){
            // do the explosion
        animatedCloud.pause();
        console.log('explosion')
        targets: els,
        
    
}

//explostion

function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('path');

    for (var i = 0; i < pathEls.length; i++) {

        // for each path
        var pathEl = pathEls[i];

        // Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
        // see documentation here: http://animejs.com/documentation/
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: 6000,
            easing: 'easeInOutSine',
            autoplay: false
        });
        
        tmp.pause();

        // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

    scrollPlay()
} 
