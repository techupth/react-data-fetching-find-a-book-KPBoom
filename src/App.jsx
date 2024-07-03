import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios"; 

function App() {
  const [searchBook, setSearchBook] = useState("");
  const [bookData,setBookData] = useState([]);

  useEffect(()=>{getServer(searchBook)},[searchBook]);

  const getServer = async (text) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
    setBookData(response.data.items);
    console.log(response);
  };

  return (
    <div className="App">
       <h1 className="head">Find a Book</h1>
       <div className="box-input">
          <input
            type="text"
            onChange={(event) => setSearchBook(event.target.value)}
          />
          {bookData.length > 0 && (
           <>{bookData.map((book,index) => (
               <div key={index}>
                  <li>{book.volumeInfo.title}</li>
               </div>
           ))}
           </>
          )}
       </div>
    </div>
  )
}

export default App;
