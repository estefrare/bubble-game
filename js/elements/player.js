var player = {
  class: 'player',
	x: 500,
	y: 200,
	radius: 10,
	speed: null,
	score: 0,
  color: '#4000FF',
  move: function (){
    if(keyboard.s && this.radius > 10){
      this.speed = 25 / (this.radius);
      this.radius -= .02;
      this.color = '#8904B1';
    }else {
      this.speed = 15 / (this.radius * .8);
      this.color = '#4000FF';
    }
    var angle = trigonometry.getAngle(this.x, this.y, coord.x, coord.y);
    if(!collision.chkWall(player, 'x')){
      this.x += trigonometry.getIncrementX(angle, this.speed);
    }
    if(!collision.chkWall(player, 'y')){
      this.y += trigonometry.getIncrementY(angle, this.speed);
    }
	},
  checkCollision: function(){
    for (var i = 0; i < game.elements.length; i++){
      if(game.elements[i].class === 'fruit'){
        collision.circleAndCircle(player, game.elements[i], function(){ //collision optimized
          player.radius += .1;
          game.elements.splice(i, 1);
          fruits.create(i, randomdistance.x(), randomdistance.y(), 1, color[random()]);
          game.elements.push(fruits.list[i]);
        } ,1);
      }
      if(game.elements[i].class === 'enemy'){
        collision.circleAndCircle(player, game.elements[i], function(){ //collision optimized
          if(player.radius > game.elements[i].radius + .5){
            player.radius += game.elements[i].radius / 5;
            game.elements.splice(i, 1);
          }
          if(game.elements[i].radius > player.radius + .5){
            game.elements[i].radius += player.radius / 3;
            game.over();
          }
        }, 1.5 /*deep*/);
      }
      if(game.elements[i].class === 'bomb'){
          collision.circleAndCircle(player, game.elements[i], function(){ //collision optimized
            if(game.elements[i].state == true && player.radius > 15){
              player.radius = (player.radius/3)*2;
              game.elements[i].state = false;
              setTimeout(function (){
                game.elements[i].state = true;
              },60000); // 1'
            }
          }, 1)
        }
    }
  },
	update: function (){
    this.checkCollision();
    this.move();
	},
	init: function (){ //never the player will be created over a enemy
    for(var i = 0; i < game.elements.length; i++){
      if(game.elements[i].class == 'enemy'){
        collision.circleAndCircle(player, game.elements[i], function(){ 
            player.x = randomdistance.x();
            player.y = randomdistance.y();
        }, 1 /*deep*/);
      }
    }
  },
	render: function (){
	  game.context.fillStyle = this.color;
    game.context.beginPath();
		game.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    game.context.closePath();
		game.context.fill();

    game.context.fillStyle = '#2E64FE';
    game.context.beginPath();
    game.context.arc(this.x, this.y, this.radius/2, 0, Math.PI*2, true);
    game.context.closePath();
    game.context.fill();

	}
};