var MoverDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mover');
  this._t = 0;
  this._x = left;
  this._y = top;
  this.distance;
};

//MoverDancer's prototype points at a new instance of Dancer
MoverDancer.prototype = Object.create(Dancer.prototype);
MoverDancer.prototype.constructor = MoverDancer;

MoverDancer.prototype.setPosition = function(xPos, yPos){
  var styleSettings = {
    top: yPos,
    left: xPos,
  };
  this.$node.css(styleSettings);
};

MoverDancer.prototype.step = function(){
  this._t = this._t + 0.02;
  var t = this._t;

  var r = 100;
  var _x = this._x;
  var _y = this._y;

  var targetPosition = [window.dancers[0]._x, window.dancers[0]._y];
  var currentPosition = [this._x, this._y];
  var xDistance = (targetPosition[0] - currentPosition[0]);
  var yDistance = (targetPosition[1] - currentPosition[1]);
  this.distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
  if (this.distance < 100){
    window.score = window.score - (this.distiance / 100);
    console.log(window.score);
  }
  var attraction = 1/(this.distance*10);

  this._x = this._x + (xDistance * attraction);
  this._y = this._y + (yDistance * attraction);

  var that = this;

  this.$node.animate({
      top: that._y,
      left: that._x,
    }, 1, function() {
      that.step();
    });

};

MoverDancer.prototype.oldStep = Dancer.prototype.step;
