// // retrieve all the SVG paths in the html
// var pathEls = document.querySelectorAll('path');
// for (var i = 0; i < pathEls.length; i++) {
//
//     // for each path
//     var pathEl = pathEls[i];
//
//     var offset = anime.setDashoffset(pathEl);
//
//     pathEl.setAttribute('stroke-dashoffset', offset);
//
//     // Animation parameters
//     anime({
//         targets: pathEl,
//         strokeDashoffset: [offset, 0],
//         duration: 4000,
//         delay: anime.random(0, 200),
//         loop: true,
//         direction: 'alternate',
//         easing: 'easeInOutSine',
//         autoplay: true
//     });
// }
// By CSS class

//  By Element ID
let transform = document.querySelectorAll("#icon2, #icon1")
anime({
  targets: transform,
  translateY: -5,
  rotate:10,
  easing: 'easeInOutCirc',
  direction: 'alternate',
  duration: 1000,
  delay: 300,
  loop: true
});

let row1 = document.querySelectorAll(".row1, .row2")
anime({
    targets: row1,
    translateY: -8,
    easing: 'easeOutQuad',
    loop:true,
    delay:300,
    direction: 'alternate',

});

//stop
let row3 = document.querySelectorAll(".row3")
anime({
    targets: row3,
    translateX: -10,
    easing: 'easeOutQuad',
    duration: 1500,
    loop:true,
    delay:500,
    direction: 'alternate',

});

//fika
let row4 = document.querySelectorAll(".row4")
anime({
    targets: row4,
    translateX: -10,
    easing: 'easeOutQuad',
    duration: 1000,
    loop:true,
    delay:1000,
    direction: 'alternate',

});

//go
let row5 = document.querySelectorAll(".row5")
anime({
    targets: row5,
    translateX: -10,
    duration: 500,
    easing: 'easeOutQuad',
    loop:true,
    delay:1500,
    direction: 'alternate',

});

let fika = document.querySelectorAll("#fika")
anime({
  targets: fika,
  scale: 1.08,
  duration: 1500,
  easing: 'easeInOutBack',
  loop:true,
  direction: 'alternate',
  delay: 500
})

let know = document.querySelectorAll("#know")
anime({
    targets: know,
    translateY: -5,
    easing: 'easeInOutSine',
    loop:true,
    duration:900,
    delay:200,
    direction: 'alternate'
});

let whatis = document.querySelectorAll("#whatis")
anime({
    targets: whatis,
    skew: -20,
    easing: 'easeOutQuad',
    loop:true,
    duration:800,
    delay:250,
    direction: 'alternate'
});

let illust = document.querySelectorAll("#illust")
anime({
  targets: illust,
  translateX:60,
  duration: 1500,
  easing: 'easeInOutQuart',
  loop:true,
  direction: 'alternate',
  delay: 100
})

let pourover = document.querySelectorAll("#pourover")
anime({
  targets: pourover,
  translateY:-40,
  duration: 1500,
  easing: 'easeInOutSine',
  loop:true,
  direction: 'alternate',
  delay: 100
})

let what = document.querySelectorAll("#what")
anime({
  targets: what,
  scale: 1.05,
  duration: 600,
  easing: 'easeInOutSine',
  loop:true,
  direction: 'alternate',
  delay: 200
})

let tips = document.querySelectorAll(".row-tips")
anime({
    targets: tips,
    translateY: -10,
    skew: -5,
    easing: 'easeInOutSine',
    loop:true,
    duration:600,
    delay:300,
    direction: 'alternate'
});

let button = document.querySelectorAll("#myBtn")
anime({
    targets: button,
    rotate: 20,
    easing: 'easeInOutSine',
    loop:true,
    duration:900,
    delay:200,
    direction: 'alternate',

});

let activated = false;
let media = document.getElementById("mediaClip"); 
  function activateMedia() { 
document.getElementById("myBtn").innerHTML = "music by audionautix.com"; 
if (!activated){
  media.play(); 
  activated = true;
} else {
  media.pause();
  activated = false;
}
  media.loop = false; 
} 
