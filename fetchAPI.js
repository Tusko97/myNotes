// a basic fetch request 
// .then will never be executed until it returns a promise

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))

fetch("URL from the webpage")
.then(response => response.json())
.then(json => console.log(response.json()))


const post = {
    body: 'This is some body to the random post',
    title: 'Added post',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    data:JSON.stringify(post)
})
.then(response => response.json())
.then(data => console.log(data))
//the result gives us the id of the newly created post

// async/await syntax
//introduced in ES2017

weather = async () => {
    const response = await fetch( https//api.openweathermap.org/data/2.5/weather?q=$lagos&units=metric&appid=${api.key}`
    )
    const myJson = await response.json();
    } 
    weather();


    // Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


    // fetch(URL).then(() => console.log())
    /*fetch(url)
    .then((posts) => posts.json())
    .then((response)=> (
      let posts = response
    
    
    
      ));
      */

// Fetch with request in regards to the three movies.
// In this lesson, we've gone through the basic mechanisms for providing a better experience. By capturing user input via event listeners, using fetch requests, and DOM manipulation, we can update page content as a user requests it. Although this won't be the case for all events, we also overrode HTML's default behavior.
      const init = () => {
        const inputForm = document.querySelector('form')
      
        inputForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const input = document.querySelector('input#searchByID');
      
          fetch(`http://localhost:3000/movies/${input.value}`)
          .then(response => response.json())
          .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
      
            title.innerText = data.title;
            summary.innerText = data.summary;
          });
        });
      }
      
      document.addEventListener('DOMContentLoaded', init);


      // Note: As a security precaution, most modern websites block the ability to use fetch() in console while on their website, so if you are testing out code in the browser, make sure to be on a page like index.html or sample_form.html.

      //While catch() may not stop all silent errors, it is useful to have as a way to gracefully handle unexpected results. We can use it, for instance, to display a message in the DOM for a user, rather than leave them with nothing.