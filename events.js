// most common events in JS
// In order for JavaScript to handle an event, we first need to tell it to listen for that event. We do this by calling the addEventListener() method on the element we want to add the listener to, and passing it two arguments:

// the name of the event to listen for, and
// a callback function to "handle" the event


// example of addEventListener
const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
// Now when you click inside of input#input, you will get an alert box.

// Let's review what's happening in this code.

// First, we grab the element that we want to add the event listener to and save a reference to it in the input variable.

// Next, we call addEventListener() on that element to tell JavaScript to listen for the event. We pass two arguments to addEventListener(): the name of the event to listen for (in this case, click) and a callback function that will be executed when the event is "heard."


// another way of doing it
const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
