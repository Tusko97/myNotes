
// Filter inbuilt function
[1, 2, 3, 4, 5].filter(function (num) {
    return num > 3;
  });
  // => [4, 5]


  //more complex version of filter.
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];
  
  //To review, we know we can iterate over that collection and print out everyone's first name:

  function firstNamePrinter(collection) {
    for (const user of collection) {
      console.log(user.firstName);
    }
  }
  
  firstNamePrinter(users);
  // LOG: Niky
  // LOG: Tracy
  // LOG: Josh
  // LOG: Kate
  // LOG: Avidor
  // LOG: Drew

  //Now what if we want to filter our collection of users for those whose favorite color is red? 
  // We could define an entirely new function, redFilter(), but that seems wasteful. Instead, let's just pass in the color that we want to filter for as an argument:

  function colorFilter(collection, color) {
    for (const user of collection) {
      if (user.favoriteColor === color) {
        console.log(user.firstName);
      }
    }
  }
  
  colorFilter(users, "Red");
  // LOG: Kate

  // Filter our users based on whose favorite animal is a jaguar.

  function filter(collection, attribute, value) {
    for (const user of collection) {
      if (user[attribute] === value) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, "favoriteAnimal", "Jaguar");
  // LOG: Niky
  // LOG: Kate

  // What if you wanted to filter two atributes.
  function filter(collection, attribute1, value1, attribute2, value2) {
    for (const user of collection) {
      if (user[attribute1] === value1 && user[attribute2] === value2) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, "favoriteAnimal", "Jaguar", "favoriteColor", "Blue");
  // LOG: Niky


  // We can also extract the comparison logic into a separate function.
  function filter(collection) {
    for (const user of collection) {
      if (likesElephants(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  function likesElephants(user) {
    return user["favoriteAnimal"] === "Elephant";
  }
  
  filter(users);
  // LOG: Drew


  //That separation of concerns feels nice. filter() doesn't remotely care what happens inside likesElephants(); it simply delegates the comparison and then trusts that likesElephants() correctly returns true or false

  // Refactor our filter function to take a callback
  function filter(collection, cb) {
    for (const user of collection) {
      if (cb(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  // LOG: Josh
  // LOG: Avidor
  
  filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  // LOG: Tracy
  // LOG: Drew

  // Our filter() function doesn't know or care about any of the comparison logic encapsulated in the callback function. All it does is take in a collection and a callback and console.log() out the firstName of every user object that makes the callback return true. And because we've extracted the logic into a separate function, our filter now works regardless of how many conditions we want to filter on.
   
  // If a pure function is repeatedly invoked with the same set of arguments, the function will always return the same result.Impure functions are the opposite.

  // Top Tip: The fewer places a particular object can be modified, the fewer places we have to look when debugging.

  // Impure function.
  // It alters the passed in function.
  const ada = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    console.log(
      `Happy birthday, ${person.name}! You're ${++person.age} years old!`
    );
  }
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 204 years old!
  
  ada;
  // => {name: "Ada Lovelace", age: 204}

  //Pure function.
  const adaAge202 = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 });
  
    console.log(
      `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
    );
  
    return newPerson;
  }
  
  const adaAge203 = happyBirthday(adaAge202);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  adaAge202;
  // => {name: "Ada Lovelace", age: 202}
  
  adaAge203;
  // => {name: "Ada Lovelace", age: 203}


  // As we've learned in this lesson, using JavaScript's built-in filter() method enables us to write more efficient, less repetitive code. Specifically:

// We no longer need to create a for or for ... of loop.
// In each iteration through the array, the current element is stored in a variable for us. We no longer need to access elements using their index values.
// A new array is automatically created and returned after the iterations are complete, so we no longer need to create an empty array and push elements into it.