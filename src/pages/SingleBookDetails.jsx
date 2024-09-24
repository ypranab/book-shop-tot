import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const SingleBookDetails = () => {
  //const [allBooks, setAllBooks] = useState([]);
  //const { book_id } = useParams();
  const location = useLocation();
  const {
    author,
    bookName,
    image,
    rating,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = location.state || {};

  /*
  useEffect(() => {
    fetch("/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const singleBook = allBooks.find((book) => book.bookId == book_id);
  const {
    bookName,
    image,
    rating,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;
*/

  const handleToast = () => {
    toast.success("Good");
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto m-10 py-16">
      <figure className="w-fit">
        <img src={`${image}`} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>Author: {author}</p>
        <p>Review: {review}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating}</p>
        <p>Total Pages: {totalPages}</p>
        <p>Tags: {tags}</p>
        <p>Publisher: {publisher}</p>
        <p>Year Of Publishing: {yearOfPublishing}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Wish to Read</button>
          <button onClick={handleToast} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetails;
