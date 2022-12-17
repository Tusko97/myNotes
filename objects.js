// Conclusion — The Power of Objects
//Let's review what we've found out so far about Objects.

// We know they can contain properties
// We know this can be used in an object to reference itself
// We know Objects inherit shared properties from other Objects via the prototype chain
// We know many things in JavaScript are actually Objects
// There are multiple ways to create Objects

// Instances are individual copies of a class that can each carry unique information, but contain shared properties that were defined on the class.
// When we create a constructor function, we are essentially creating a template that can be used to generate new, individual objects.

function PhraseObjectConstructor(name) {
    this.greeting = `Hello there ${name}!`;
    this.time = () => {
      const currentTime = new Date();
      return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    };
  }
  
  const phrases1 = new PhraseObjectConstructor("Harold");
  const phrases2 = new PhraseObjectConstructor("Hank");
  
  phrases1.greeting;
  // => "Hello there Harold!"
  phrases2.greeting;
  // => "Hello there Hank!"