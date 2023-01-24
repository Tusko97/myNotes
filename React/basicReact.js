// Imperative Programming:

//Explicitly describes the actions a program should take, each step of the way
//Describes how a program should go about doing those actions

//Declarative Programming:

//Describes what a program should accomplish (or what the end result should be)
//Leaves the determination of how to get to the end result up to the program


// React has a recommended tool, create-react-app Links to an external site., that makes it easy to create a new React project from scratch. The create-react-app tool sets up a preconfigured, default project, ready to launch with npm start. This package includes functionality built to be mobile friendly and progressive. That means apps will work on all modern browsers and mobile devices.

// Babel Links to an external site.: an included transpiler that converts modern JavaScript and custom code like JSX into more widely compatible JavaScript
// webpack Links to an external site.: a 'bundler' that takes all our work, along with any required dependency code, and packages it all up in a single, transferable bundle

// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.


//A function component looks like this:

function Comment() {
    return <div>Naturally, I agree with this article.</div>;
  }
  
  // A class component looks like this:
  class Comment extends React.Component {
    render() {
      return <div>Naturally, I agree with this article.</div>;
    }
  }
  
  
  //The minimum requirement for a React component is that it must be a function that starts with a capital letter and returns JSX.
  
  // The following are valid components
  
  function PlainDiv() {
    return <div>I am one line, so I do not need the parentheses</div>;
  }
  
  const Photo = () => {
    return (
      <figure>
        <img
          className="image"
          src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        />
        <figcaption>Whoa</figcaption>
      </figure>
    );
  };
  
  const Table = () => (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr>
        <th>312213</th>
        <th>Tim Berners-Lee</th>
      </tr>
    </table>
  );
  
  function ParentComponent() {
    return (
      <main>
        <PlainDiv />
        <Photo />
        <Table />
      </main>
    );
  }
  
  // Props
  
  function ParentComponent() {
    // passing prop to ChildComponent
    return <ChildComponent text="Hello!" number={2} />;
  }
  
  function ChildComponent(props) {
    // using the values of the text and number props
    return (
      <div>
        {props.text} {props.number}
      </div>
    );
  }
  
  
  //Conclusion
  //While HTML elements are the basic building blocks of a website, (for example, a <div>), a React application usually consists of several React components combined together. Unlike simple HTML elements, React components are smarter and bigger. They allow you to do much more and incorporate logic into how content displays.