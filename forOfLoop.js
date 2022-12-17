  // For...of loop
  const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArray) {
  console.log(element);
}


const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];


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

//It's also not too difficult to print out only users whose favorite color is blue:

function blueFilter(collection) {
  for (const user of collection) {
    if (user.favoriteColor === "Blue") {
      console.log(user.firstName);
    }
  }
}

blueFilter(users);
// LOG: Niky
// LOG: Josh
// LOG: Avidor



// Use Case	Method
// Finding a single element that meets a condition --> indexOf(), find()
// Finding and returning a list of elements that meet a condition --> filter()
// Modifying each element and returning the modified array --> map()
// Creating a summary or aggregation of values in an array --> reduce()

//The forEach() method executes a provided function once for each array element.

oppressedWorkers = [
  "Dopey",
  "Sneezy",
  "Happy",
  "Angry",
  "Doc",
  "Lemonjello",
  "Sleepy"
];

oppressedWorkers.forEach(function(oppressedWorker) {
  console.log(`${oppressedWorker} wants to form a union!`);
}); //=> undefined

/* Output
Dopey wants to form a union!
Sneezy wants to form a union!
Happy wants to form a union!
Angry wants to form a union!
Doc wants to form a union!
Lemonjello wants to form a union!
Sleepy wants to form a union!
*/



// Conclusion
// As you continue learning JavaScript, you should take advantage of the expressive iterator methods we've learned about in this section as much as possible. Under most circumstances, using find(), filter(), map(), or reduce() in place of more generic options, forEach, for...of, and for, will save you work in the long run and make your code more efficient and expressive.