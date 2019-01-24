"use strict";
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  // Fake data taken from tweets.json
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweetsArr) {
    for (let key in tweetsArr) {
      let tweet = createTweetElement(tweetsArr[key]);
      $( "#published-tweets" ).append(tweet);
    }
  }

  function createTweetElement(tweet) {
    //converts unix time to readable days ago format for "#time-stamp"
    let unixTime = tweet.created_at;
    let timeNow = Date.now();
    let timeSince = timeNow - unixTime;
    //maybe refactor to years and days ago?
    let days = Math.floor(timeSince / 86400000);

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
    const $footerP = $( "<p>" ).addClass( "time-stamp" ).text( `${days} days ago` );

    //builds each-tweet element structure
    const $fullHeaderDiv = $( $headerDiv ).append( $headDivH2, $headDivP );
    const $finishedHeader = $( $eachTweetHeader ).append( $headerImg, $fullHeaderDiv );
    const $finishedPostFieldDiv = $( $postFieldDiv ).append( $pFDivP );
    const $finishedFooter = $( $eachTweetFooter ).append( $footerP );
    const $allTogetherNow = $( $eachTweet ).append( $finishedHeader, $finishedPostFieldDiv, $finishedFooter );

    return $allTogetherNow;
  }

  renderTweets(tweetData);
});





