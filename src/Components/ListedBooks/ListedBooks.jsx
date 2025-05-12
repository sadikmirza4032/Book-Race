
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreReadList } from "../../Utiliity/addToDb";
import Book from "../Book/Book";


const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() =>{
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book =>storedReadListInt.includes(book.bookId));
    setReadList(readBookList);
  } ,[])
   const handleSort = (sortType) =>{
    setSort(sortType)
    if(sortType ==='Number of pages Publisher year'){
      const sortedReadList = [...readList].sort((a,b) =>a.totalPages - b.totalPages)
    setReadList(sortedReadList);
    }
      if(sortType === 'Rating'){
      const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
   }
    return (
        <div className="mx-auto  max-w-4xl">
         
            <h2 className="text-5xl text-center bg-cyan-500">BOOKS</h2>
             <div className="dropdown dropdown-bottom dropdown-end my-7 ml-90 bg-blue-700">
             <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort By ${sort}`:'Sort By'}</div>
             <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             <li onClick={() =>handleSort('Rating')}><a>Rating</a></li>
             <li onClick={() =>handleSort('Number of pages Publisher year')}><a>Number of pages Publisher year</a></li>
  </ul>
</div>
            {/* name of each tab group should be unique */}
             <div className="tabs tabs-box">
             <input type="radio" name="my_tabs_6" className="tab" aria-label="Read List" />
             <div className="tab-content bg-base-100 border-base-300 p-6">Book I Read: {readList.length}
               {
                readList.map(book =><Book key={book.id} book={book}></Book>)
              }
               </div>
              <input type="radio" name="my_tabs_6" className="tab" aria-label="Wish List" defaultChecked />
              <div className="tab-content bg-base-100 border-base-300 p-6">My Wish List</div>
             

              
        </div>
        </div>
    );
};

export default ListedBooks;