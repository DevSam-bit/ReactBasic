import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Books } from './Books';
import Book from './Book';

function BookList() {
  return (
    <section className="booklist">
      {Books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
  </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));