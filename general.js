// In this lesson, we've learned about three tools we can use with arguments and parameters: 
// default, spread, and rest. We use default any time we have a value we want to use by default for a parameter but still want to be able to override that value easily. 
// We can use the spread operator to efficiently pass values in an array as arguments to a function. 
// Finally, we use the rest parameter when we want to capture arguments in an array. This can be particularly helpful when we aren't sure how many arguments will be passed in but still want access to all of them inside our function.

// Given that the syntax for the spread operator and the rest parameter is the same, how do we know which is being used? It's all about context.
//  If the three dots occur when you are calling the function, then it's the spread operator. If they happen when you're defining the function, it's the rest parameter.