let myPaths = document.querySelectorAll('path')

//first thing that happens when page is uploaded
function setup(){
    anime({
    targets:myPaths[0],
    translateX:100
})

anime({
    targets:myPaths[1],
    translateX:-300
})
}


function mousePressed(){
 anime({
    targets: myPaths,
    translateY: 150,
    scale: 1.25,
    duration: anime.random(0,2000),
    loop: true, 
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: false
     
    
})   
}
