//Lists and Keys
function ColorList() {
    const colors = [
      "firebrick",
      "rebeccapurple",
      "salmon",
      "darkslategray",
      "hotpink",
    ];
  
    const colorElements = colors.map((color) => {
      return <li style={{ color: color }}>{color}</li>;
    });
    return (
      <div>
        <h1>Top 5 CSS Colors</h1>
        <ol>
          {/* display the array of <li> elements here! */}
          {colorElements}
        </ol>
      </div>
    );
  }
  
  
  // Warning: Each child in a list should have a unique "key" prop.
  // Check the render method of `ColorList`.
  // To fix this error, we must give each <li> element a special key prop, like so:
  const colorElements = colors.map((color) => {
    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
  });
  
  
  // if you have an array of objects, it's often best to use the object's id as the key:
  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];
  
  const userHeadings = users.map((user) => {
    return <h1 key={user.id}>{user.firstName}</h1>;
  });
  
  // If you have an array of elements that aren't unique, and you can't use the id, you might be tempted to use the index position instead:
  const fib = [0, 1, 1, 2, 3, 5];
  
  const fibList = fib.map((number, index) => {
    return <div key={index}>{number}</div>;
  });