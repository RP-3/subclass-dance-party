var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log(Dancer.prototype.step);
};

//BlinkyDancer's prototype points at a new instance of Dancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  console.log(this.oldStep);
  this.$node.toggle();
  this.oldStep.call(this);

};

//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;


  // blinkyDancer.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //  // oldStep();

  //   oldStep.call(this);
  //   // jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;



