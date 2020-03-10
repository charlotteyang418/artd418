// retrieve all the SVG paths in the html
var cloudPath = document.querySelectorAll('.st5');
var cloud = document.querySelectorAll('.cloud');
var text = document.querySelectorAll('.st0', '.st1', '.st2', '.st3', '.st4')

let scrollPosition = 0;

var myPath = anime.path(cloudPath[0]);

let animatedCloud;

let animatedText;


function setup(){

    animatedCloud = anime({
        targets: cloud[0],
        translateX: myPath('x'),
        translateY: myPath('y'),
        scale: 0,
        opacity:0.2,
        easing: 'linear',
        duration: 10000,
        loop: false
    });

    animatedText = anime({
      targets: text[0],
      scale: 0.8,
      opacity:0.2,
      duration:1000,
      easing: 'linear',
      loop: false
    })

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

    if (scrollPosition < 3000){
        animatedCloud.seek(frame)
        animatedText.seek(frame)
    } else {
        animatedCloud.pause()
        animatedText.pause()
    }

    console.log(scrollPosition)
}

function scrollConvertion(scrollPosition) {
    let totalHeight = document.body.clientHeight - window.innerHeight;
    let nFrames = 10000;
  //  console.log(totalHeight + " , "+ scrollPosition)

    return map(scrollPosition, 0, totalHeight, 0, nFrames)
  //  return Math.floor((scrollPosition / totalHeight) * nFrames);
}
