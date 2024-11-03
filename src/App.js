import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const arr=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]

  
  
  const [query,setQuery]=useState("")
  const [filteredword,setFilteredword]=useState("");
  const [searched,setSearched]=useState(false);
  const handleSearch=()=>{
    setSearched(true)
      const word=arr.find(item=>query.toLowerCase()==item.word.toLowerCase())
      if(word)
        setFilteredword(word.meaning);
      else
        setFilteredword("")
      setQuery("")
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
     <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search for word...'/>
     <button onClick={handleSearch}>Search</button>
     <h6>Definition:</h6>

     {searched && filteredword ? (
        <p>{filteredword}</p>
      ) : (
        searched && <p>Word not found in the dictionary.</p>
      )}
    </div>
  );
}

export default App;
