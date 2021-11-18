import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// must start with Capital letters
function Greeting() {
  return (
    <div className="">
      <h1>hello world</h1>
    </div>
  );
}

// same thing but way more difficult
// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

// render look for what we are rendering and where to render
ReactDom.render(<Greeting />, document.getElementById("root"));
