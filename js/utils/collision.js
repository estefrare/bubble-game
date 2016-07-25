var collision = {
  circleAndCircle: function(circle1, circle2, callback, deep){ //deep: as can circle1 through the other circle2
    deep = deep || 1; // if is 1, no have deep
    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if ((distance * deep) < circle1.radius + circle2.radius)
      callback();
  },
  chkWall: function(element, coord){
    if(element.x - element.radius < 10 && coord == 'x'){
      element.x = 10 + element.radius;
      return true;
    }
    if(element.x + element.radius > game.width - 10 && coord == 'x'){
      element.x = game.width - element.radius -10;
      return true;
    }
    if(element.y - element.radius < 10 && coord == 'y'){
      element.y = 10 + element.radius;
      return true;
    }
    if(element.y + element.radius > game.height - 10 && coord == 'y'){
      element.y = game.height - element.radius -10;
      return true;
    }
  }
}

var random = function (){
  return Math.floor((Math.random() * 11) + 0);
}