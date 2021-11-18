import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

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
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Tony chen";
const Book = () => {
  const title = "I Love Ramen to death";
  return (
    <article className="book">
      <img src="https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* must be an expression that returns a value*/}
    </article>
  );
};

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => {
//   return (
//     <img
//       src="https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg"
//       width="300px"
//       height="300px"
//     ></img>
//   );
// };

// const Title = () => <h1>I would die for Ramen</h1>;

// // JSX + CSS
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: ".25rem" }}>
//     by tony
//   </h4>
// );

ReactDom.render(<BookList />, document.getElementById("root"));
