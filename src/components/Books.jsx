/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const bookState = book;
  const { bookId, bookName, tags, author, category, rating } = book;

  return (
    <Link to={`/book/${bookId}`} state={bookState}>
      <div className="card bg-base-100 w-96 h-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={`${book?.image}`} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>Author : {author}</p>
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <p>
            Tags:{" "}
            {tags.map((tag, idx) => (
              <span key={idx} tag={tag}>
                {"#" + tag + " "}
              </span>
            ))}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
