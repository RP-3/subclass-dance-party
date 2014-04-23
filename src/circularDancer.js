var CircularDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('circular');
  this._t = 0;
  this._x = left;
  this._y = top;
  this.distance;
};

//CircularDancer's prototype points at a new instance of Dancer
CircularDancer.prototype = Object.create(Dancer.prototype);
CircularDancer.prototype.constructor = CircularDancer;

CircularDancer.prototype.step = function(){
  if (this.queue === true){
    return;
  }

  this._t = this._t + 0.02;
  var t = this._t;

  var r = 60;
  var _x = this._x;
  var _y = this._y;

  var newLeft = Math.floor(_x + (r * Math.cos(t)));
  var newTop = Math.floor(_y + (r * Math.sin(t)));

  var targetPosition = [window.dancers[0]._x, window.dancers[0]._y];
  var currentPosition = [newLeft, newTop];
  var xDistance = (targetPosition[0] - currentPosition[0]);
  var yDistance = (targetPosition[1] - currentPosition[1]);
  this.distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
  if (this.distance < 50){
    window.score ++;
    console.log(window.score);
  }
  var attraction = 100/this.distance;

  newLeft = newLeft + (xDistance * attraction);
  newTop = newTop + (yDistance * attraction);

  var that = this;

  this.$node.animate({
      top: newTop,
      left: newLeft,
    }, 1, function() {
        that.step();
      });
};

CircularDancer.prototype.oldStep = Dancer.prototype.step;
