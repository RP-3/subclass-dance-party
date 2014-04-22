$(document).ready(function(){
  window.dancers = [];
  window.score = 0;
  var name;

  $( "#whichkey" ).on( "keydown", function( event ) {
    if(event.which === 37){ //left
      window.dancers[0].step(-1, 0, 100);
    }
    if(event.which === 38){ //up
      window.dancers[0].step(0, -1, 100);
    }
    if(event.which === 39){ //right
      window.dancers[0].step(1, 0, 100);
    }
    if(event.which === 40){ //down
      window.dancers[0].step(0, 1, 100);
    }
  });

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").innerHeight() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    if (dancerMakerFunctionName === "ZigZagDancer"){
      window.dancers.push(dancer);
    }
  });


});
