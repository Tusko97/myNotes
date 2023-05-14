const myArray = [23, 34, 45, 56]
console.log(myArray)
myArray.shift()
console.log(myArray)

// WHILE LOOP
let gift = ["teddy bear", "drone", "doll"];

function wrapGifts(gift) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gift.length) {
    console.log(`Wrapped ${gift[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gift;
}

wrapGifts(gift);
