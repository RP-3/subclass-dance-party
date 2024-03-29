var ZigZagDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zigzag');
  this._y = top;
  this._x = left;
  this._t = 0;
  this._speed = 100;
};

//ZigZagDancer's prototype points at a new instance of Dancer
ZigZagDancer.prototype = Object.create(Dancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;



ZigZagDancer.prototype.step = function(xAxis, yAxis, speed){
  if (!speed){
    speed = this._speed;
  }

  var m = this._t;
  var t = this._t + 0.05;

  var xIncrement = xAxis * (t-m) * speed;
  var yIncrement = yAxis * (t-m) * speed;

  this._x = this._x + (xIncrement);
  this._y = this._y + (yIncrement);

  var newLeft = Math.floor(this._x);
  var newTop = Math.floor(this._y);

  var that = this;

  this.$node.animate({
      top: newTop,
      left: newLeft,
    }, 1);

};

ZigZagDancer.prototype.oldStep = Dancer.prototype.step;
