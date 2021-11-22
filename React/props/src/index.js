import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    author: "Tony chen",
    title: "I Love Ramen to death",
    img: "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg",
  },

  {
    id: 2,
    author: "Audrey Chen",
    title: "I Love Corgis to death",
    img: "https://iheartdogs.com/wp-content/uploads/2021/02/Cute_Corgi_face-e1613588692370.jpg",
  },
];

function BookList() {
  // wont render objects if passed in objects
  console.log(...books);
  return (
    <section className="booklist">
      {books.map((book) => {
        // must pass in a key because react keep tracks of elements
        return (
          <Book
            key={book.id /*can pass in index, but index changes*/}
            {...book} // use spread operator
          />
        );
      })}
    </section>
  );
}

// also const Book = ({img, title, author})
const Book = (props) => {
  // object destructuring
  // must use children for children prop
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
      {/* <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4> */}

      {/* {console.log(props)} */}
      {/* <p>{props.job}</p> */}
      {/* <p>{props.title}</p> */}
      {/* <p>{props.number}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
