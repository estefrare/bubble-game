var enemis = {
  list: {},
  create: function (id, x, y, radius, color){
    enemis.list[id] = {
      id: id,
      class: 'enemy',
      x: x,
      y: y,
      radius: radius,
      speed: null,
      backgroundColor: color,
      move: function(){
        this.speed = 10 / (this.radius * .8);

        var value;
        var flag = false;
        var close = {
          sum: 1000,
          x: 500,
          y: 500
        }
        for (var i = 0; i < game.elements.length; i++){
          if(game.elements[i].class === 'player'){
            value = Math.abs(game.elements[i].x - enemis.list[id].x) + Math.abs(game.elements[i].y - enemis.list[id].y);
            if(value < this.radius+70 && game.elements[i].radius < this.radius){
              close.sum = value;
              close.x = game.elements[i].x;
              close.y = game.elements[i].y;
              flag = true;
            }
          }
          if(game.elements[i].class === 'fruit' && flag == false){
            value = Math.abs(game.elements[i].x - enemis.list[id].x) + Math.abs(game.elements[i].y - enemis.list[id].y);
            if(value < close.sum){
              close.sum = value;
              close.x = game.elements[i].x;
              close.y = game.elements[i].y;
            }
          }
        }

        var angle = trigonometry.getAngle(this.x, this.y, close.x, close.y);
        if(!collision.chkWall(enemis.list[id], 'x')){
          this.x += trigonometry.getIncrementX(angle, this.speed);
        }
        if(!collision.chkWall(enemis.list[id], 'y')){
          this.y += trigonometry.getIncrementY(angle, this.speed);
        }
      },
      checkCollision: function(){
        for (var i = 0; i < game.elements.length; i++){
          if(game.elements[i].class === 'fruit'){
            collision.playerAndFruit(enemis.list[id], game.elements[i], i);
          }
          if(game.elements[i].class === 'bomb'){
            collision.enemyAndBomb(enemis.list[id], game.elements[i]);
          }
        }
      },
      init: function () {},
      update: function () {
        this.move();
        this.checkCollision();
      },
      render: function () {
        game.context.fillStyle = this.backgroundColor;
        game.context.beginPath();
        game.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        game.context.closePath();
        game.context.fill();
      }
    }
  }
}