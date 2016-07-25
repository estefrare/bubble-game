var bombs = {
  list: {},
  create: function(id, x, y, radius, color, state){
    bombs.list[id] = {
      id: id,
      class: 'bomb',
      x: x,
      y: y,
      radius: radius,
      backgroundColor: color,
      state: state,
      init: function(){},
      update: function(){},
      render: function () {
        if(this.state){
          game.context.fillStyle = this.backgroundColor;
          game.context.beginPath();
          game.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
          game.context.closePath();
          game.context.fill();
        }
      }
    }
  }
}