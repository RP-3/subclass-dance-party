var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

//BlinkyDancer's prototype points at a new instance of Dancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  Dancer.prototype.step.call(this);

};
//We can access the step function from dancer using Call/Apply, passing 'this' to set the current blinky dancer as the context

