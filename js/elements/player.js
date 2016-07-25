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
        collision.playerAndFruit(player, game.elements[i], i);
      }
      if(game.elements[i].class === 'enemy'){
        collision.playerAndEnemis(player, game.elements[i], i);
      }
      if(game.elements[i].class === 'bomb'){
            collision.enemyAndBomb(player, game.elements[i]);
      }
    }
  },
	update: function (){
    this.checkCollision();
    this.move();
	},
	init: function (){

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