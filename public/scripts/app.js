// "use strict";
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png" },
      "handle": "@SirIsaac" },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants" },
    "created_at": 1461116232227 };

  function createTweetElement(object) {
    //defines variables
    const $eachTweet = $( "<article>" ).addClass( "each-tweet" );
    const $eachTweetHeader = $( "<header>" );
    const $headerImg = $( "<img/>" ).attr( "src", tweetData.user.avatars.small );
    const $headerDiv = $( "<div>" ).addClass( "user-info" );
    const $headDivH2 = $( "<h2>" ).text(tweetData.user.name);
    const $headDivP = $( "<p>" ).text(tweetData.user.handle);
    const $postFieldDiv = $( "<div>" ).addClass( "post-field" );
    const $pFDivP = $( "<p>" ).text(tweetData.content.text);
    const $eachTweetFooter = $( "<footer>" );
    const $footerP = $( "<p>" ).addClass( "time-stamp" ).text(tweetData.created_at);

    //builds each-tweet element structure
    const $fullHeaderDiv = $( $headerDiv ).append( $headDivH2, $headDivP );
    const $finishedHeader = $( $eachTweetHeader ).append( $headerImg, $fullHeaderDiv );
    const $finishedPostFieldDiv = $( $postFieldDiv ).append( $pFDivP );
    const $finishedFooter = $( $eachTweetFooter ).append( $footerP );
    const $allTogetherNow = $( $eachTweet ).append( $finishedHeader, $finishedPostFieldDiv, $finishedFooter );

    return $allTogetherNow;
  }

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

  }

  const $tweet = createTweetElement(tweetData);
  // console.log($tweet);

  $("#published-tweets").append($tweet);

});

//NOTES:

//import db from '/path/name/here.js';

// array.forEach(element => {

//   return;
// });

// return blah;


// function getThing(key) {
//   return this[key];
// }

// const getOtherThing = key => this[key];

// const Example = {
//   prop1: 'thing',
//   prop2: 'spaghetti',
//   prop3: 'spongetowels',
//   prop4: getThing('prop1'),
//   // prop5: getOtherThing('prop2')
// };

// console.log(Example.prop4);





