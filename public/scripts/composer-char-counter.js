$(function() {
  //get.querySelector("#tweet-area");

  $(".tweet-area").keyup(function() {
    const content = $( ".tweet-area" ).val();
    const reducedCount = 140 - content.length;
    $(".counter").html(reducedCount);
    //console.log(this);
    //if ($(".counter").html(reducedCount) <= 0)

  });



});