const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFood: 'hot dogs'
  };
  
  const { name, breed } = doggie;
  name; // => "Buzz"
  breed; // => "Great Pyrenees"

  // The {} around the variable names tells the JavaScript engine that it's going to be pulling values from an Object. The engine looks inside the doggie object for the attributes name and breed and assigns the values associated with those keys to the corresponding variable names. This is known as destructuring assignment.

  // We can also use destructuring assignment with a nested data structure:
  const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFoods: {
      meats:{
        ham: 'smoked',
        hotDog: 'Oscar Meyer',
      },
      cheeses:{
        american: 'kraft'
      }
    }
  };
  
  const { ham, hotDog } = doggie.favoriteFoods.meats;
  ham; // => "smoked"
  hotDog; // => "Oscar Meyer"

  // We can also do destructuring in arrays using the same logic as above.

  // We can also destructure with strings by using the String.prototype.split() Links to an external site.method to turn the string into an array:
  const dogsName = 'Sir Woody BarksALot';
  const [title, firstName, lastName] = dogsName.split(' ');
  console.log(title, firstName, lastName); // LOG: Sir Woody BarksALot