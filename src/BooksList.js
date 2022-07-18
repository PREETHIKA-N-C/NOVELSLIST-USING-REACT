import React from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./App.css";


function BooksList(){
  let books = [
    {
      id: 1,
      name: "The Shining"

    },
    {
      id: 2,
      name: "All that remains",
     },
    {
      id: 3,
      name: "The 5AM Club",
    }
  ]
    const [name,setName]=useState("");
    const [bookList,setBookList]=useState(books);
    const [favorites, setFavorites] = useState([]);
    
    const nameHandler = (e) => {
      setName(e.target.value);
    };

    const addBook=()=>{
       if (bookList.length > 4) {
        alert("Five Books are Allowed to Add in the List");
      } 
      else if( name === ""){
          alert("Input Field is Empty :(" + "   "+ "Enter A Proper Book Name");
      }
      else{
            let tempBook1 = {
                name:name,
                id:Math.random()
            };
            setBookList([...bookList,tempBook1]);
            setName("");
        }  
     }
    
    const removeBook=(id)=>{
        let books= bookList.filter((book)=>{
            return book.id!==id

        })
        setBookList(books);

    }
    
   const addFavorites = (id) => {
    let tempBook2 = bookList.filter((book) => {
      return book.id === id;
    });
    console.log(tempBook2);
    let fav = 0;
    favorites.map((book) => {
      if (book.id === tempBook2[0].id) {
        fav = 1;
      }
    });
    
    fav ? alert("Selected Book is already added in the favorites") : setFavorites([...favorites, tempBook2[0]]);
  }; 
   
  const removeFavorites = (id) => {
    let tempBook3 = favorites.filter((book) => {
      return book.id !== id;
    });
    setFavorites(tempBook3);
  };


    return(
        <div className="BookList">
          <h1 className="MainTitle" >E-LIBRARY</h1>
        <h2>BOOKS NAME LIST</h2>
        <input className="Input" value={name} onChange={nameHandler} placeholder="Enter A Proper Book Name Here"/>
        <Button variant="secondary" className="mr-2 AddBookButton" onClick={addBook}>Click to Add More Books</Button>
        {
            bookList.length<=0?(
                <h4 className="InfoCont">No Books Found in the List . . . . .</h4>
            ):(
                <>
                
        {
            bookList.map((book)=>{
                
               return (
                <ul>
               <li className ="List" key={book.id}>{book.name}
               <Button variant="danger" className="mr-2 DelButton" onClick={()=>{removeBook(book.id)}}>Delete</Button>
               <Button variant="info" className="mr-2 AddFavButton" onClick={()=>{addFavorites(book.id)}}>Add to Favorites</Button>
               </li>
               
               </ul> 
               );
               
            })
        }
        
           

                </>
            )
        }
        <h2 className="FavBookTitle">FAVORITE BOOKS</h2>
      {favorites.length <= 0 ? (
        <h4 className="InfoCont">Add Your Favorite Books Here!!</h4>
      ) : (
        <>
         
            {favorites.map((book) => {
              return (
                <ul>
                  <li className ="List" key={book.id}>{book.name}
                  <Button variant="danger" className="mr-2 DelButton" 
                    onClick={() => {
                      removeFavorites(book.id);
                    }}
                  >
                    Delete
                  </Button>
                  </li>
                  
                </ul>
              );
            })}
        </>
      )}
      </div>
    );
  };
export default BooksList;