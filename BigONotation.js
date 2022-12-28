// In computer science, Big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
// If you want to find a sock in a pile of laundry and the laundry probably has 1000 items. Let's translate this analogy to code
function findSock(laundry) {
    for (const item of laundry) {
      if (item === "sock") return item;
    }
  }
  
  findSock(["shirt", "shorts", "sock", "pants"]);

  
  // Let's think about the time complexity of this algorithm (how long it will take to run) step by step:

// The for...of block will iterate over every element in the laundry array.
// On the first iteration, the first element, "shirt" is assigned to the variable item.
// The if statement checks: is the item a "sock"? Nope! We continue iterating.
// On the second iteration, the second element, "shorts" is assigned to the variable item.
// The if statement checks: is the item a "sock"? Nope! We continue iterating.
// On the third iteration, the third element, "sock" is assigned to the variable item.
// The if statement checks: is the item a "sock"? Yep! We stop iterating and return from the function.


// Conclusion
//To recap:

// Big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
// To calculate the time complexity of an algorithm using Big O notation, count the number of steps the computer will take to run our code and then remove any constants (so O(2n + 1) becomes just O(n)).
// To calculate the space complexity of an algorithm using Big O notation, check what memory is needed for the inputs as well as any auxiliary data structures (and also remove any constants).




// Think about it for a moment: what kind of data structure have you encountered in JavaScript that serves a similar purpose, and allows us to access data just by knowing how that data is labeled?

// That's right: an object! Looking up a key on an object is a very fast operation — we can consider it a constant time, or O(1), operation. So if our laundry data is stored in an object instead of an array, here's what our algorithm could look like:

function findSock(laundry) {
  if (laundry.sock) {
    return "sock";
  }
}

findSock({
  shirt: true,
  shorts: true,
  sock: true,
  pants: true,
});

// If you want to find a sock and its matching pair, the following code would be useful.

function findPair(laundry) {
  // look through each item in the pile
  for (let i = 0; i < laundry.length; i++) {
    // look through the rest of the pile
    for (let j = i + 1; j < laundry.length; j++) {
      // check if it matches the first sock
      if (laundry[i] === laundry[j]) {
        return [laundry[i], laundry[j]];
      }
    }
  }
}

findPair(["sock 5", "sock 2", "sock 1", "sock 3", "sock 1"]);