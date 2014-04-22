var MoverDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};

//MoverDancer's prototype points at a new instance of Dancer
MoverDancer.prototype = Object.create(Dancer.prototype);
MoverDancer.prototype.constructor = MoverDancer;

MoverDancer.prototype.step = function(){
  this.oldStep.call(this);
  this.$node.toggle();

  var xPos = Math.random() * 10;
  var yPos = Math.random() * 10;

  xPos = this.left + xPos;
  yPos = this.top + yPos;

  this.setPosition(xPos, yPos);


  //Generate a new X and Y position by incrementing each.
  //Invoke setPosition with those new values
  //Animate Dancer from old position to new one
};

MoverDancer.prototype.oldStep = Dancer.prototype.step;
