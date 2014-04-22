var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

//BlinkyDancer's prototype points at a new instance of Dancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  this.oldStep.call(this);

};

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
