/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;

  };
  addLike(addLike) {
    this.numberOfLikes++;
  };
  addComment(addComment) {
    this.comments.push(addComment)
  }

};

var tweetMoab = new Tweet("@ericmatlock", "Wow, I'm just about to head to Moab!", "4:10 AM EDT", 23, ["Awesome, have a great trip!", "WOW"]);


console.log(tweetMoab);

tweetMoab.addLike();
console.log(tweetMoab);

tweetMoab.addComment("What are you doing there?");
console.log(tweetMoab);

tweetMoab.addComment("We are riding white rim!");
console.log(tweetMoab);

tweetMoab.addLike();
console.log(tweetMoab);
