var text = {
	draw: function(srt, color, fontSize, fontFamily, align, baseLine, x, y){
		x = x || game.width/2;
		y = y || game.height/2;
		fontSize = fontSize || 30;
		fontFamily = fontFamily || 'monospace';
		game.context.fillStyle = color;
		game.context.font = fontSize + 'px' + fontFamily;
		game.context.align = align || 'center';
		game.context.baseLine = baseLine || 'center';
		game.context.fillText(srt, x, y);
	}
};