var game = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
  img: null,
	backgroundColor: '#333',
	context: null,
	state: null,
	lastStateChange: 30,
	elements: [],
	start: function (canvas){
		game.x = canvas.x;
		game.y = canvas.y;
		game.width = canvas.width;
		game.height = canvas.height;
		game.context = canvas.context;
		game.state =  gameStateEnum.playing;
    game.img = new Image();
    game.img.src = 'img/background.jpg';
		//CREA PAREDES
		wall.create('top', 0, -990, game.width, 1000);
		wall.create('bottom', 0, game.height-10, game.width, 1000);
		wall.create('left', -990, 0, 1000, game.height);
		wall.create('right', game.width-10, 0, 1000, game.height);
    //CREA BOMBS
    bombs.create(1, game.width/ 2, game.height / 4, 4, '#A4A4A4', true);
    bombs.create(2, game.width/ 2, (game.height / 4)*3, 4, '#A4A4A4', true);
    bombs.create(3, game.width/ 4, game.height / 2, 4, '#A4A4A4', true);
    bombs.create(4, (game.width/ 4)*3, game.height / 2, 4, '#A4A4A4', true);
    /*bombs.create(i, , , 3, '#A4A4A4');
    bombs.create(i, , , 3, '#A4A4A4');*/
    for(var i = 1; i < 5; i++){
      game.elements.push(bombs.list[i]);
    }
    //CREA FRUITS
    for(var i = 1; i < 250; i++){
      fruits.create(i, randomdistance.x(), randomdistance.y(), 1, color[i%12]);
      game.elements.push(fruits.list[i]);
    }
    //CREA ENEMIES
    for(var i = 1; i < 10; i++){
      enemis.create(i, randomdistance.x(), randomdistance.y(), (Math.random() * 25) + 5, color[i%12]);
      game.elements.push(enemis.list[i]);
    }
    //COLOCA PAREDES
	game.elements.push(wall.list.top);
	game.elements.push(wall.list.bottom);
	game.elements.push(wall.list.left);
	game.elements.push(wall.list.right);
	//COLOCA PLAYER
	game.elements.push(player);
	for (var i = 0; i < game.elements.length; i++){
		game.elements[i].init();
	}
	setInterval(game.update, 1000/60);
	//game.update();
	},
	pause: function(){
		if(game.state === gameStateEnum.pause){
			game.state = gameStateEnum.playing;
		}else if(game.state === gameStateEnum.playing){
			game.state = gameStateEnum.pause;
		}
		game.lastStateChange = 0;
	},
	win: function(){
		game.state = 'w';
	    game.context.font = '30px Arial';
	    game.context.textAlign = 'center';
	    game.context.fillText('YOU WIN', game.width/2, game.height/2);
	},
	over: function(){
		game.state = 'end';
	    game.context.font = '30px Arial';
	    game.context.textAlign = 'center';
	    game.context.fillText('GAME OVER', game.width/2, game.height/2);
	},
	update: function(){
		var enemies = 0;
		for(var i = 0; i < game.elements.length; i++){
			if(game.elements[i].class == 'enemy'){
				enemies++;
			}
		}
		if(enemies == 0){
			game.win()
		}

		++game.lastStateChange;
		if(game.state === gameStateEnum.playing){
			for(var i = 0; i < game.elements.length; i++){
				game.elements[i].update();
			}
		}
		if(keyboard.p && game.lastStateChange > 30){
			game.pause();
		}
		game.render();
	},
	render: function(){
		if(game.state === gameStateEnum.playing){
			//LIMPIA EL CANVAS
      var background = game.context.createPattern(game.img,"repeat");
			game.context.fillStyle = background;
			game.context.fillRect(game.x, game.y, game.width, game.height);
			//LLAMA A TODOS LOS RENDERS
			for(var i = 0; i < game.elements.length; i++){
				game.elements[i].render();
			}
		}else{
			game.context.fillStyle = 'rgba(50, 50, 50, 0.01)';
			game.context.fillRect(game.x, game.y, game.width, game.height);
			switch(game.state){
				case gameStateEnum.pause:
					text.draw('pause', '#fff');
					break;
			}
		}
	}
}

var gameStateEnum = {
	playing: 'playing',
	pause: 'pause',
	win: 'w',
	over: 'o'
}

var color = {
  0: '#FF0000',
  1: '#00FF00',
  2: '#0000FF',
  3: '#FFFF00',
  4: '#00FFFF',
  5: '#FF00FF',
  6: '#660000',
  7: '#006600',
  8: '#000066',
  9: '#666600',
  10: '#006666',
  11: '#660066',
}

/*  1: '#F7FE2E',
  2: '#F7FE2E',
  3: '#FFBF00',
  4: '#FF4000',
  5: '#80FF00',
  6: '#F7FE2E',
  7: '#F7FE2E',
  8: '#FFBF00',
  9: '#FF4000',
  10: '#80FF00'*/