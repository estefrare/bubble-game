var randomColor = function(opacity){
	opacity = opacity || 1;
	var num1 = Math.floor((Math.random() * 255) + 0);
	var num2 = Math.floor((Math.random() * 255	) + 0);
	var num3 = Math.floor((Math.random() * 255	) + 0);
	

	return 'rgba('+num1+', '+num2+', '+num3+', '+opacity+')';
}