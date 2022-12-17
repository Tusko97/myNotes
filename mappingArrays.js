// Another very common built-in array method is .map(), which transforms every element in an array to another value.
// Like .filter(), .map() accepts a callback function, and passes each element in turn to the callback:
// Array.prototype.map() is a method that iterates over an array and applies a function to each element, modifying it in some way. 
// While both .filter() and .map() return a new array, .filter() returns a subset of the original array (unless all elements meet the provided condition) in which the elements are unchanged. .map(), on the other hand, returns a new array that's the same length as the original array in which the elements have been modified.

const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(originalNumbers, function (num) {
  return num * num;
});

originalNumbers;
// => [1, 2, 3, 4, 5]

squaredNumbers;
// => [1, 4, 9, 16, 25]

//Now let's try using our version of the map() function on a trickier data structure — a list of recently onboarded engineers. First off, we need to flip each new engineer's account from a normal user to an admin:

const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });
  
  oldAccounts;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "user" }
  //    ]
  
  newEngineers;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin" }
  //    ]


  //Nondestructive updating is an important concept to practice — destructively modifying objects at multiple points within a code base is one of the biggest sources of bugs.

  // Next, we just need a simple array of the new engineers' userIDs that we can shoot over to the system administrator:
  const userIDs = map(newEngineers, function (eng) {
    return eng.userID;
  });
  
  userIDs;
  // => [15, 63, 97, 12, 44]


  // Finally, we'll update our engineer objects to indicate that all the new engineers have been provided a new work laptop.
  const equippedEngineers = newEngineers.map(function (eng) {
    return Object.assign({}, eng, { equipment: "Laptop" });
  });
  
  equippedEngineers;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" }
  //    ]


// map() with a function expression

  const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(function (student) {
  return student + " the skier";
});
//=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];

// map() with an arrow function.

// When the parameter list is only one element, we can drop () !
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map((student) => student + " the skier");
//=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];


// map() with Complex data structures

const robots = [
    { name: "Johnny 5", modes: 5, isActivated: false },
    { name: "C3PO", modes: 3, isActivated: false },
    { name: "Sonny", modes: 2.5, isActivated: false },
    { name: "Baymax", modes: 1.5, isActivated: false },
  ];
  
  const activatedRobots = robots.map((robot) => {
    return Object.assign({}, robot, {
      modes: robot.modes * 2,
      isActivated: true,
    });
  });
  
  console.log(activatedRobots);
  
  /*
   Result:
   [
     { name: 'Johnny 5', modes: 10, isActivated: true },
     { name: 'C3PO', modes: 6, isActivated: true },
     { name: 'Sonny', modes: 5, isActivated: true },
     { name: 'Baymax', modes: 3, isActivated: true }
   ]

   // Conclusion
   // map() takes 2 arguments — a callback and the optional context. The callback is called for each value in the original array and the modified value is added to a new array. Its return value is a new array that is the same length as the original array. Using map() saves time while making the code simpler and more expressive.