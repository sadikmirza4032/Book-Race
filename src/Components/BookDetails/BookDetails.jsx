import { useLoaderData, useParams } from "react-router";
import { addStoredToWhiteList, addToStoreReadList } from "../../Utiliity/addToDb";



const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId)
    const data = useLoaderData();
    
    const book = data.find(book => book.bookId === id);

    const{bookId:newId, image,review, bookName, author,publisher,yearOfPublishing,totalPages,category} =book;

   const handleMarkRead =(id) =>{
    addToStoreReadList(id)
   }
   const handleWhiteList = (id) =>{
    addStoredToWhiteList(id);
   }

    return (
        <div className="my-20 flex flex-col md:flex-row">
  <div>
    <img className="w-[425px] h-[564px] object-cover" src={image} alt={bookName} />
  </div>
  <div className="ml-0 md:ml-12 mt-6 md:mt-0 text-left">
    <h2 className="text-4xl font-bold">{bookName}</h2>
    <p className="my-2 text-lg text-gray-700">By: {author}</p>
    <hr className="my-4 border-gray-300" />
    <h4 className="text-md font-semibold">{category}</h4>
    <hr className="my-4 border-gray-300" />
    <p className="max-w-[540px] max-h-[200px] overflow-y-auto">{review}</p>
    <br />
    <p>Total Pages: {totalPages}</p>
    <h4>Year of Publishing: {yearOfPublishing}</h4>
    <p>Publisher: {publisher}</p>
    
    <button onClick={() =>handleMarkRead (bookId)} className="btn btn-outline btn-accent mr-5">Read</button>
    <button onClick={() =>handleWhiteList(bookId)} className="btn btn-accent ml-9 my-5">Wishlist</button>
  </div>
</div>
    );
};

export default BookDetails;