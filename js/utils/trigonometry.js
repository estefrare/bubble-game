var trigonometry = {
  degToRad: function(deg) {
    return deg * (Math.PI / 180);
  },
  getIncrementX: function(angle, speed) {
    return Math.cos(trigonometry.degToRad(angle)) * speed;
  },
  getIncrementY: function(angle, speed) {
    return Math.sin(trigonometry.degToRad(angle)) * speed;
  },
  getAdjacentAngle: function(angle) {
    return angle <= 180 ? 180 - angle : 360 - angle + 180;
  },
  getConjugatedAngle: function(angle) {
    return 360 - angle;
  },
  getAngle: function(xplayer, yplayer, xmouse, ymouse){
    return 180*Math.atan2(ymouse - yplayer, xmouse - xplayer)/Math.PI;
  }
};



