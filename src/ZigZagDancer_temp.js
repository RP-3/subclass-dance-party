var ZigZagDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zigzag');
  this._t = 0;
  this._x = left;
  this._y = top;
};

//ZigZagDancer's prototype points at a new instance of Dancer
ZigZagDancer.prototype = Object.create(Dancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;

ZigZagDancer.prototype.setPosition = function(xPos, yPos){
  var styleSettings = {
    top: yPos,
    left: xPos,
  };
  this.$node.css(styleSettings);
};

ZigZagDancer.prototype.step = function(){
  this._t = this._t + 0.05;
  var t = this._t;

  var r = 100;
  var _x = this._x;   // center X position
  var _y = this._y;   // center Y position

  var newLeft = Math.floor(_x + (r * Math.cos(t)));
  var newTop = Math.floor(_y + (r * Math.sin(t)));

  console.log(this);

  $(this).animate({
      top: newTop,
      left: newLeft,
    }, 1, function() {
      this.step();
    });
  // setTimeout(function(){
  //   //self.setPosition(xPos, yPos);
  //   $(".zigzag").animate({left : "-=40px"}).animate({up: "+=30px"});
  //   self.step();
  // }, 1000);

  //Generate a new X and Y position by incrementing each.
  //Invoke setPosition with those new values
  //Animate Dancer from old position to new one
};

ZigZagDancer.prototype.oldStep = Dancer.prototype.step;
