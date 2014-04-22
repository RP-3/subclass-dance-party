var ZigZagDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zigzag');
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
