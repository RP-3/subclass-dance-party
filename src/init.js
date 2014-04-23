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

  $(".lineUpButton").on("click", function(){
    for (var i = 1; i < window.dancers.length; i++){
      if (window.dancers[i].queue === false){
        console.log(window.dancers[i]);
        window.dancers[i].queue = true;
        window.dancers[i].lineUp();
      }
      else {
        window.dancers[i].queue = false;
        window.dancers[i].step();
      }
    }
  });

  $(".addDancerButton").on("click", function(event){
    console.log('clicked');

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").innerHeight() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $("body").append(dancer.$node);
    window.dancers.push(dancer);
  });
 $('.ZigZag').trigger('click');
 $('.ZigZag').hide();



});
