import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

function View({ props }) {
    console.log("Line 5 in View")
    useEffect(() => {
        fetchPerson();
        console.log(props);
    }, []);

    const {id} = useParams();
    const [person, setPerson] = useState({});

    const fetchPerson = async () =>{
        const fetchPerson = await fetch(
            `https://swapi.dev/api/people/${id}`
        );
        const person = await fetchPerson.json();
        setPerson(person);
        console.log(person);
    }


  return (
    <div>
        {person&&
        
            <div>

            <h1>People</h1>
            <h1>{person.name}</h1>
            <h3>Height: {person.height}</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Hair Colour: {person.hair_color}</h3>
            <h3>Skin Colour: {person.skin_color}</h3>
            </div>
        }
    </div>
  )
}



export default View;