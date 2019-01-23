$(function() {
  //reduce ".counter" by number of characters in ".tweet-input" textarea
  $( ".tweet-input" ).keyup(function() {
    //updates number in counter
    const tweetContent = $(this).val();
    //const currentChars = tweetContent.length;
    // const reducedCount = 140 - currentChars;
    const reducedCount = 140 - tweetContent.length;
    $(this).siblings( ".counter" ).html(reducedCount);
    //updates colour based on currentCount
    //console.log(tweetContent.length);
    if (tweetContent.length > 139) {
      $( ".counter" ).toggleClass( "red", true );
    } else {
      $( ".counter" ).toggleClass( "red", false );
    }
  });
});

// else if (tweetContent.length > 129 && tweetContent.length < 139) {
//   $( ".counter" ).toggleClass( "orange", true );
// }