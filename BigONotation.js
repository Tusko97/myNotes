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