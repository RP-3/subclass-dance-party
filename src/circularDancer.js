var CircularDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('circular');
  this._t = 0;
  this._x = left;
  this._y = top;
};

//CircularDancer's prototype points at a new instance of Dancer
CircularDancer.prototype = Object.create(Dancer.prototype);
CircularDancer.prototype.constructor = CircularDancer;

CircularDancer.prototype.setPosition = function(xPos, yPos){
  var styleSettings = {
    top: yPos,
    left: xPos,
  };
  this.$node.css(styleSettings);
};

CircularDancer.prototype.step = function(){
  this._t = this._t + 0.05;
  var t = this._t;

  var r = 100;
  var _x = this._x;   // center X position
  var _y = this._y;   // center Y position

  var newLeft = Math.floor(_x + (r * Math.cos(t)));
  var newTop = Math.floor(_y + (r * Math.sin(t)));

  var that = this;

  this.$node.animate({
      top: newTop,
      left: newLeft,
    }, 1, function() {
      that.step();
    });
};

CircularDancer.prototype.oldStep = Dancer.prototype.step;
