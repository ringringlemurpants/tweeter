"use strict";
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  function loadTweets(){
    $.ajax( {
      method: 'GET',
      url: '/tweets',
      data: JSON
    })
      .done(function (response) {
        renderTweets(response);
      });
  }

  loadTweets()

  $( "form" ).submit(function(event){
    event.preventDefault();
    const tweet = $(this).children( "#tweet-input" );
    const tweetOut = tweet.val();
    const tweetOutSerial = tweet.serialize();

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
        .done(function(){
          loadTweets();
        })
        .fail(function() {
          alert( "Fail." );
        });
    }
  });

  function renderTweets(tweetsArr) {
    for (let key in tweetsArr) {
      let tweet = createTweetElement(tweetsArr[key]);
      $( "#published-tweets" ).prepend(tweet);
    }
  }

  function createTweetElement(tweet) {
    //converts unix time to readable days ago format for "#time-stamp"
    let unixTime = tweet.created_at;
    let timeNow = Date.now();
    let timeSince = timeNow - unixTime;
    //maybe refactor to years and days ago?
    let day = Math.floor(timeSince / 86400000);

    //defines variables
    const $eachTweet = $( "<article>" ).addClass( "each-tweet" );
    const $eachTweetHeader = $( "<header>" );
    const $headerImg = $( "<img/>" ).attr( "src", tweet.user.avatars.small );
    const $headerDiv = $( "<div>" ).addClass( "user-info" );
    const $headDivH2 = $( "<h2>" ).text( tweet.user.name );
    const $headDivP = $( "<p>" ).text( tweet.user.handle );
    const $postFieldDiv = $( "<div>" ).addClass( "post-field" );
    const $pFDivP = $( "<p>" ).text( tweet.content.text );
    const $eachTweetFooter = $( "<footer>" );
    const $footerP = $( "<p>" ).addClass( "time-stamp" ).text( `tweeted ${day} days ago` );

    //builds each-tweet element structure
    const $fullHeaderDiv = $( $headerDiv ).append( $headDivH2, $headDivP );
    const $finishedHeader = $( $eachTweetHeader ).append( $headerImg, $fullHeaderDiv );
    const $finishedPostFieldDiv = $( $postFieldDiv ).append( $pFDivP );
    const $finishedFooter = $( $eachTweetFooter ).append( $footerP );
    const $allTogetherNow = $( $eachTweet ).append( $finishedHeader, $finishedPostFieldDiv, $finishedFooter );
    return $allTogetherNow;
  }

});

