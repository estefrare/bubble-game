var keyboard = {
	p: false,
  	s: false,
	press: function (evt){
		var key =  keyboardEnum[evt.code];
		if(key){
			keyboard[key] = true;
		}
	},
	release: function (evt){
		var key = keyboardEnum[evt.code];
		if(key){
			keyboard[key] = false;
		}
	}
};

var keyboardEnum = {
	KeyP: 'p',
  	KeyS: 's',
  	KeyR: 'r'
}