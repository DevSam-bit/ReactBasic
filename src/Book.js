import React from 'react';

const Book = (props) => {
  const { img, title, author } = props;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author);
  };
  
  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="amazon books" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

//  const Book = (props) => {
// // //   return (
// // //     <article className='book'>
// // //       <img src={props.img} alt="amazon books" />
// // //       <h2>{props.title}</h2>
// // //       <h4>{props.author}</h4>
// // //     </article>
// // //   );
// // // };

// // DESTRUCTING PROPS
// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt="amazon books" />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

export default Book;