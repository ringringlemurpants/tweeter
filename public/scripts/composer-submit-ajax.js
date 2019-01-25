"use strict"

$(function() {
  $( "form" ).submit(function(event){

    event.preventDefault();
    const tweetOut = $(this).children( "#tweet-input" ).serialize();
    console.log(tweetOut);

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: tweetOut
    })
      .done(function() {
        alert( "Data Saved!" );
      })
      .fail(function() {
        alert( "You must enter a tweet to twort you twit!" );
      });
  });
});