import React from "react";
import ReactDom from "react-dom";

// Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <div>
//         <Person />
//         <Message />
//       </div>
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
// ReactDom.render(<Greeting />, document.getElementById("root"));

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>this is a car</article>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
