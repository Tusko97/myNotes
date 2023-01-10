/*
1. Execution Context: the space set aside in the JavaScript engine's memory containing references to the variables and methods that are currently in scope. At the global level, this is the global execution context; inside a function, it is the function execution context plus the execution contexts available to it via the scope chain.

2. this: refers to a special object that is part of the current execution context. The value of this is determined based on how and where the function is invoked. In future lessons, we'll explain how JavaScript determines what this is when a function is invoked.

3. call: This is a method on a function that calls the function, just like (). The first argument, traditionally called thisArg, is the object that should be used as the value of this when the function is invoked. You then list any other arguments you want to send to the function after the thisArg. An invocation of call looks like this: Calculator.sum.call(multilingualMessages, 1, 2).

4. apply: This is a method on a function that calls the function, just like (). The first argument, traditionally called thisArg, is the object that should be used as the value of this when the function is invoked. You then pass additional arguments you want to send to the function as an Array after the thisArg. An invocation of apply looks like this: Calculator.sum.apply(multilingualMessages, [1, 2]).

5. bind: This method returns a copy of the function it's called on, but with the execution context "set" to the argument that's passed to bind. It looks like this: sayHello.bind(greenFrog)("Hello") //=> "Mr. GreenFrog says *Hello* to you all.".
*/





// The Execution Context of Methods
// When you call a function expression that's a property of an object — a method — that function expression's this object is quite simply the object on which the function is called, i.e., the object to the left of the dot. Recall from the previous lesson that the this keyword can be used inside a function to access the object and its properties; let's log this from inside the warn method:

const byronPoodle = {
  name: "Byron",
  ageInYears: 2,
  warn: function() {
    console.log(`Bark bark bark`);
    console.log(this);
  }
};
// and call our method:

byronPoodle.warn();
// LOG: Bark bark bark
// LOG: {name: "Byron", ageInYears: 2, warn: ƒ}


// a more sophisticated example 
const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function() {
      console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
  };
  
  blakeDoodle.warn();
  // LOG: Blake the Labradoodle issues an ear-rupturing atomic bark when he hears noises in the apartment hallway


  // Let's look at another example. First, we'll create a couple of objects and a function expression that we'll assign to the variable name speak:

const frog = { name: "Kermit" };
const pig = { name: "Miss Piggy" };
const speak = function() { return `It ain't easy being ${this.name}`};
// We can then assign the speak function as a property to each of our objects:

frog.speak = speak;
pig.speak = speak;
frog.speak === pig.speak; //=> true
// We see above that both pig and frog have the same speak property, but let's see what happens when we call the method on each of our objects:

frog.speak();  //=> "It ain't easy being Kermit"
pig.speak();  //=> "It ain't easy being Miss Piggy"
// The context used inside the function speak is defined by what's "left of the dot."

// This lesson covers how this is implicitly set. An important place where this happens is when new instances of classes are created.

// Conclusion
// To sum up the discussion thus far:
/*
Execution context is set at function call-time and includes a context object (this) that is passed to the function, either implicitly or explicitly.
In "bare" function calls, the context object is automatically set to the global object unless prevented by "use strict".
In "non-bare" function calls, the context object is automatically set to the "object to the left of the dot."
(For Object-Oriented JavaScript) The context object defaults to the new thing being created in a class's constructor
This covers the implicit context-setting rules. We'll now learn about the explicit context-setting rules.
*/



// We learned that when we invoke functions, JavaScript creates a function execution context that includes a context object (this) which is made available to the function. That context object will be set to "whatever's to the left of the dot" or, when there's nothing to the left of the dot, the global object.
// Recall that call and apply are methods on functions that provide an alternate way to call the function and enable us to override the default context object.


// What if we told JavaScript that instead of the record being a parameter, it could be assumed as a context and thus accessible via this. To accomplish this, we can use either call or apply:

function introWithContext(line){
  return `${this.firstName} ${this.familyName} says: ${line}`
}

introWithContext.call(asgardianBrothers[0], phrase)
//=> Thor Odinsson says: I like this brown drink very much, bring me another!

introWithContext.apply(asgardianBrothers[0], [phrase])
//=> Thor Odinsson says: I like this brown drink very much, bring me another!
// Note that, unlike the intro function, introWithContext expects only a catchphrase as an argument. We can then call either call or apply on introWithContext, passing a thisArg object as the first argument; that argument becomes the this inside the function. (See the documentation for call and apply for further clarification.)


// Let's suppose that we wanted to create a copy of the introWithContext function in which the context is permanently bound to asgardianBrothers[0]. This is where bind comes in:

const asgardianBrothers = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]
function introWithContext(line){
  return `${this.firstName} ${this.familyName} says: ${line}`
}

const thorIntro = introWithContext.bind(asgardianBrothers[0])
thorIntro("Hi, Jane") //=> Thor Odinsson says: Hi, Jane
thorIntro("I love snakes") //=> Thor Odinsson says: I love snakes



// To sum up the explicit overrides:

// The context object can be explicitly set in a function by invoking call on the function and passing an object (thisArg) as the first argument; the object can then be accessed via this inside the function. Additional parameters to the function are listed after thisArg.
// The context object can be explicitly set in a function by invoking apply on the function and passing an object (thisArg) as the first argument; the object can then be accessed via this inside the function. Additional parameters to the function are stored in an array which is passed as the second argument.
// The context object can be locked in a function by invoking bind on the function and passing it a thisArg. The bind function makes a copy of the functionality of the function it was called on, but with all the this stuff locked in place, and returns that function. That new function can have arguments passed to it with () as usual.


