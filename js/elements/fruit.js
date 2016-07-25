var fruits = {
  list: {},
  create: function (id, x, y, radius, color){
    fruits.list[id] = {
      id: id,
      class: 'fruit',
      x: x,
      y: y,
      radius: radius,
      backgroundColor: color,
      init: function () {},
      update: function () {},
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