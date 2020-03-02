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
    targets: document.querySelectorAll('image'),
    translateY: 200,
    scale: 0.5
})
    anime({
        targets: myPaths[1],
        translateX: 100
    })
}

