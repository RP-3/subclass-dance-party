var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.queue = false;

};

Dancer.prototype.step = function(){
  var self = this;
  setTimeout(function(){
    self.step();
  }, this.timeBetweenSteps);

};

Dancer.prototype.lineUp = function(){
  if (this.queue === true){
    this.$node.animate({top: 400, left: (Math.random() * window.innerWidth)}, 400);
  }
  else{
    this.step();
  }
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

