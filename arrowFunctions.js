// function.
exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });
  
  // "Go for a five-mile run"
  // "Stretch! Work that core!"

 
  // arrow function.
  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  // Or even shorter:
  exerciseRoutine(() => console.log("Stretch! Work that core!"));

  // callback functions
  
  let isDivisible = (x) => {
    if(x % 2 === 0) {
       return true
    } else {
      return false
    }
  }
  let myTotal = 50 + 60;
  let result = isDivisible(myTotal);
  console.log(result);