import { Link } from "react-router";


const Book = ({book}) => {
    const{bookId,bookName, image, author, tags, category,totalPages,rating} = book;
    return (
   <Link to={`/books/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-sm p-6 ">
  <figure className=" bg-blue-200 my-8 rounded-2xl" >
    <img 
    className="h-[166px] w-[144px]"
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body ">
    <div className="gap-4 justify-between flex">
      {
        tags.map((tag, index) =><button key={index} className="btn btn-xs btn-dash text-green-700 bg-green-200">{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
    </h2>
    <p>By: {author}</p>
      <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div>{rating}</div>
      <div>{totalPages}</div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
</div>
    </div>
  </div>
</div>
   </Link>
    );
};

export default Book;