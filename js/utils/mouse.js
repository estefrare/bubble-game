var coord = {
  x: 0,
  y: 0
}

var position = function(event){
  coord.y = event.clientY;
  coord.x = event.clientX;
  return coord;
}
