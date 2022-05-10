
import { useEffect, useState } from 'react';

import { useNavigate } from "react-router";



export default function Main() {
    const [id, setId] = useState(1);
    const[planets, setPlanets] = useState([])
    const[location, setLocation] = useState("people");
    
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(id)
      if(location==="people"){
        navigate(`/people/${id}`)
      }
      else if(location === "planets"){
        navigate(`/planets/${id}`)
      }
  
      // setSearch(id)
      console.log(e.target.value)
    }
  

  return (
    <div className="Main">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Search">Search For: </label>
          <select onChange={(e)=>{setLocation(e.target.value)}}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="ID">ID: </label>
          <input type="number" onChange={e => setId(e.target.value)}/>
          <button type="submit">Search</button>
        </form>
        
      </header>
    </div>
  )
}
