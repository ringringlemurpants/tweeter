"use strict"

$(function() {
  $( "form" ).submit(function(event){
    event.preventDefault();
    const tweet = $(this).children( "#tweet-input" );
    const tweetOut = tweet.val();
    const tweetOutSerial = tweet.serialize();
    console.log(tweetOut);
    if (tweetOut.length > 140) {
      alert( "Twort-abort: twits tweet too long!" );
    } else if (tweetOut.length < 1) {
      alert( "You must enter a tweet to twort you twit!" );
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: tweetOutSerial
      })
        .fail(function() {
          alert( "Fail." );
        });
    }
  });
});