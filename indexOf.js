// indexOf() and find() methods can be used to locate an element in an array, and that they return the first element for which the condition is met
// find() method takes a callback function as its argument.

const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

cards.indexOf('jack of clubs'); //=> 1
cards.indexOf('jack of hearts'); //=> -1

// If you pass in the optional second argument, indexOf() will begin the search at the specified position:

cards.indexOf('ace of spades', 2); //=> 3
cards.indexOf('jack of clubs', 2); //=> -1 

//Array.prototype.find() allows you to execute more complex searches by passing it a callback function
//Say we want to determine whether an array of numbers contains any odd values. We can write the following callback function to do this:


function isOdd(element, index, array) {
    return (element % 2 === 1);
  }
  
[4, 6, 8, 10].find(isOdd); //=> undefined, not found
[4, 5, 8, 10].find(isOdd); //=> 5
[4, 5, 7, 8, 10].find(isOdd); //=> 5
[4, 7, 5,  8, 10].find(isOdd); //=> 7

//Note that only the first argument — the current element in the array — is required for the callback function