# fizzbuzz-refactor
fizzbuzz-refactor

This was a follow up exercise to the previous Thinkful FizzBuzz app Challenge, where my app was required to list out the numbers from 1 to 100, using the FizzBuzz rules for substituting in multiples of 3, 5 and both 3 and 5 (a.k.a. 15). For this assignment, I made changes to my original FizzBuzz app and refactor it so it used a function and meet the following requirements:

When the page loads, the user should be prompted to supply a number. The easiest way to do this would be with the prompt() function, but you should also feel free to create a simple text input with text telling the user to input a number.
You’ll need to write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting “fizz”, “buzz”, and “fizzbuzz” accordingly.
You’ll need to convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string “22”, you could convert that to a number with +”22”.
You will need to validate user input to ensure the user is submitting a number. You can use the parseInt() function in javascript to convert a string into an integer. For example, parseInt('597a') will return 597 where parseInt('hello') will return NaN. Read more about parseInt() on MDN.
Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out this answer on Stack Overflow.
DO NOT spend any time thinking about design for this app. Like the first version, the goal here is not to create a pretty app, but instead to hone your JavaScript skills.
