import React from "react";

const Book = (props) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author, children } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button
        type="button"
        onClick={
          () => complexExample(author)
          /* just pass in complexExample(author) this won't work because it is invoking the function*/
        }
      >
        more complex example
      </button>
      {children}
    </article>
  );
};

// can have more export, but can only have one default export
export default Book;
