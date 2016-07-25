var collision = {
  playerAndFruit: function(player, fruit, index){ //callback
    var dx = player.x - fruit.x;
    var dy = player.y - fruit.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < player.radius + fruit.radius) {
        player.radius += .1;
        game.elements.splice(index, 1);
        fruits.create(index, randomdistance.x(), randomdistance.y(), 1, color[random()]);
        game.elements.push(fruits.list[index]);
    }
  },
  enemyAndBomb:function(enemy, bomb){
    var dx = enemy.x - bomb.x;
    var dy = enemy.y - bomb.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < enemy.radius + bomb.radius && bomb.state == true && enemy.radius > 15){
      enemy.radius = (enemy.radius/3)*2;
      bomb.state = false;
      setTimeout(function (){
        bomb.state = true;
      },60000); // 1'
    }
  },
  playerAndEnemis: function(player, enemy, index){
    var dx = player.x - enemy.x;
    var dy = player.y - enemy.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if ((distance * 1.5) < player.radius + enemy.radius ){
      if(player.radius > enemy.radius + .5){
        player.radius += enemy.radius / 5;
        game.elements.splice(index, 1);
      }
      if(enemy.radius > player.radius + .5){
        enemy.radius += player.radius / 3;
        game.over();
      }
    }
  },
  enemyAndFruit: function(enemy, fruit, index){
    var dx = enemy.x - fruit.x;
    var dy = enemy.y - fruit.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if ((distance * 1.5) < enemy.radius + fruit.radius) {
      enemy.radius += .1;
      game.elements.splice(index, 1);
      fruits.create(index, randomdistance.x(), randomdistance.y(), 1, color[random()]);
      game.elements.push(fruits.list[index]);
    }
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