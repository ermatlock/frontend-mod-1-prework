## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

  I have been using Pomodoro technique throughout this process, however the simple act of writing the specific task down and ticking the boxes each session really helped! I just may take the suggestion to get an actual egg timer as I do feel the act of clicking on my screen is feels slightly less relevant. If I want to track time, I can still use a tracker like Toggl. As I shifted from exercise to exercise I could write down where I was getting stuck much more effectively.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

  Again, as I said before, the writing down of intentions and specific task made a significant difference. Instead of jumping around or trying to find something, or going down the google rabbit hole, I found myself just focusing on the exercise. Once done the act of crossing that task out and writing the next one was satisfying. My estimations were actually slightly faster than I expected this time, aside from a longer hiccup on the class methods exercise.

3. What is an Object, and how is it different from an Array in Javascript?

  An object is a collection of different variables that can all fit under the umbrella of one thing. We can take boolean, string, number values, etc., and place them together. An array is a single collection under one variable. Though it can contain different values, it has no categorization of those values, aside from the ability to index the position of an element.  

4. For each set of data, would an array or object be better to store it? Explain your choice.
- List of all of the students in class
  As long as we aren't linking any other attributes, I think an array would suffice here, as we just have a list of names.

- List of states and their capitals
  This could still be listed as an array with a convention such as ``["State_Capital"]``, or ``["State1", "Capitol1", "State2", "Capital2"]``.  

- List of things to pack for vacation
  I would lean towards an object in order to categorize things such as "clothing" "toiletries", "equipment", each of which could be an array related to that category. I don't want to pack my q-tips with my socks!

- Names of all the Instagram accounts I follow
  I would use an array here, as this is just a list of followed names `["Doe_John", "Doe_Jane"];`.

- List of student names and their cohort
  An object would work better here. We can uniquely identify the year, month, FE or BE, along with an array of names.

- Ingredients and amount of each ingredient to bake a cake
  I would use an object, so that I categorize the type of ingredient with its key value pair, which would be the amount of that ingredient.

- All my favorite restaurants
  I would use an array as this could be a simple list of favorite restaurants.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

  In my Amazon.com shopping cart I have some items. Each item is an object similar to this:

  `var myAwesomeItem = {
    image: '/images/I/61kPTwmVWJL._AC_AA150_.jpg',
    description: '24 Fineliner Color Pens Set, Taotree Fine Line Colored Sketch Writing Drawing Pens for Journal Planner Note Taking and Coloring Book, Porous Fine Point Pens Markers, Great for Art Crafts Scrapbooks';
    priceUS: 8.69
    soldBy: 'TaoTree'
    quantity: 1

  };
    }`


2. What questions do you still have about classes and/or Objects?
  Going back to our class methods burrito exercise, we have:

  `Constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;`

    I do not entirely understand how the arguments in the constructor can map to the parameters, and be all named the same name without breaking the code.
