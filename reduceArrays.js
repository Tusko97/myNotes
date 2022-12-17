// reduce() is used to aggregate a result, i.e., to reduce a list to a single value.

//For example we have the data below;
const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

// We're going to reduce the array of products to a single value: the total price. To do this, we'll create a getTotalAmountForProducts() function:

  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price;
    };
  
    return totalPrice;
  }
  
  console.log(getTotalAmountForProducts(products)); // LOG: 33.46

  // Conclusion
  // With reduce(), we are able to quickly get a single summary value from the elements in an array. reduce() — like the other iterator methods we've learned about in this section — can greatly cut down the amount of time spent recreating common functionality. It can also make our code more efficient and expressive.