var GifDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
 // this.$timeBetweenSteps = 10000;
  this.$node.addClass('GifDancer');
};

//BlinkyDancer's prototype points at a new instance of Dancer
GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;

GifDancer.prototype.step = function(){
  //this.$node.toggle();
  Dancer.prototype.step.call(this);

};
