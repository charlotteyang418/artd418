let myPath = document.querySelectorAll('path')

var path = anime.path('path');

anime({
  targets: 'path',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});