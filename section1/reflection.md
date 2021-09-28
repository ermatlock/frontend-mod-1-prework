## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

  This article is a great collection of useful habits I should be cultivating in order to maximize my success. I feel that my hit rate on these habits could be much better than they currently are. I read a ton, but I would say most of my reading consists of articles, tutorials, technical manuals, etc. I know that I could read more books than I currently do.

  I feel that I intellectually view learning as a process, however I think in practice there is a feeling that there is a task that needs to be completed, to reach an end, which can lead to overwhelm. It would be good for me to practice to quickly recognize when my paradigm is shifting away from process and make a quick correction.

  I do feel I have a growth mindset. I love learning new things, and improving myself. But it is always important as i said previously to be aware when i am slipping from that mindset to take a quick break, do a meditation, take some time to get myself back there.

  I love teaching. I do sometimes forget that I do not need to be an expert to share whatever knowledge I have gained, however little I may feel I have. Teaching always helps me to learn at an even more efficient rate.

  I think that one thing I would add to this list would be that SuperLearners are comfortable taking many small steps towards their goal. Much like a program iterates, moving forward in small increments on a regular basis helps to move forward much more than lining a bunch of things up and trying to tackle them in big chunks.       

2. What are the data types you learned about in this section? In your own words, define each.

   * String - Any characters, symbols, numbers within single or double quotes. Examples are a word, or sentence like "Hello world!". Numbers can also be in a string, but are then not treated as   numbers.
   * Number (integer or float) - Any number value, either in whole numbers or in decimal values. Maths can be done on these.
   * Boolean - True or False. These values are valuable in a number of ways. For instance, they can tell the program whether to move forward with one branch of a process or another.


3. How would you log the string `"Hello World!"` to the console?

  ```
  var greeting = "Hello World!";

  console.log(greeting);`
  ```
4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  You would use "//". this is useful for describing what a particular piece of code is for, or to break up and organize code into sections for easier reference. if you have a piece of code you want to turn off, you can also  add the "//"to every line you don't want to run.
  // This comment would be ignored by JavaScript
  /* Alternatively a comment could be entered like this. */

5. In your own words, what is a variable? How would you explain it to a 5 year old?

  A variable is something you want your computer program to remember. Let's say you want to greet a user when they log into their website. In order to do that you have to tell the program to remember the name of the person that signed in, like `var signInName = "Eric";`. This variable can now be reassigned to other names so that whoever is logged in gets a greeting with their name. A variable can describe many other types of things such as words and phrases, numbers, true/false statements, objects, etc.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

  Sweetwater.com - a music equipment online store.
  Types of variables would be something like:
  ```
  var instrument = 'Synthesizer'; // This is a string
  var manufacturer = 'Korg'; // This is a string
  var numberOfKeys = 49; // This is a number
  var velocityResponse = true; // This is a boolean
  ```
7. In your own words, explain what concatenation is.

  Concatenation is the combination or joining together of two or more components into one string, using a plus (`+`) operator. For instance, you could combine a string, a number, and a boolean all into one string.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

  Back to my Sweetwater.com, I imagine they could use concatenation to display a purchase confirmation message, such as
  "Thank you *Eric* for your order. Your order number is *12345* and your item will be delivered on *10/1*."

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

  I wonder what kind of reasons you would use concatenation over interpolation. Is there any reason why the latter would not be used?
