$(function() {
  //reduces ".counter" by number of characters in ".tweet-input" textarea
  $( ".tweet-input" ).keyup(function() {
    const tweetContent = $(this).val();
    const reducedCount = 140 - tweetContent.length;
    $(this).siblings( ".counter" ).html(reducedCount);
  });

});