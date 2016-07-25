var wall = {
	list: {},
	create: function (id, x, y, width, height) {
		wall.list[id] = {
			id: id,
      class: 'wall',
			x: x,
			y: y,
			width: width,
			height: height,
			backgroundColor: '#585858',
      img: null,
			init: function () {},
			update: function () {},
			render: function () {
        /*this.img = new Image();
        this.img.src = 'img/block.png';
        var background = game.context.createPattern(this.img,"repeat");*/
				game.context.fillStyle = this.backgroundColor;
        game.context.fillRect(this.x, this.y, this.width, this.height);
			}
		}
	}
}