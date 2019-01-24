$(function() {
  //reduce "#counter" by number of characters in "#tweet-input" textarea
  $( "#tweet-input" ).keyup(function() {
    //updates number in counter
    const tweetContent = $(this).val();
    const reducedCount = 140 - tweetContent.length;
    $(this).siblings( "div" ).find("#counter").html(reducedCount);

    //changes colour of counter "#counter" on length of "#tweet-input"
    if (tweetContent.length > 139) {
      $( "#counter" ).toggleClass( "red", true);
    } else if (tweetContent.length > 129 && tweetContent.length < 140) {
      $( "#counter" ).toggleClass( "orange", true);
      $( "#counter" ).toggleClass( "red", false);
    } else {
      $( "#counter" ).toggleClass( "orange", false);
      $( "#counter" ).toggleClass( "red", false);
    }
  });
});

//prevent tweet if field is above maximum. alert?