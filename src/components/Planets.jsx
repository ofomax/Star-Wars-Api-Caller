import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

function Planets({ props }) {
  useEffect(() => {
    fetchPlanet();
    console.log(props);
  }, []);

  const { loc } = useParams();
  const [planet, setPlanet] = useState({});

  const fetchPlanet = async () => {
    const fetchPlanet = await fetch(
      `https://swapi.dev/api/planets/${loc}`
    );
    const planet = await fetchPlanet.json();
    setPlanet(planet);
    console.log(planet);
  }


  return (
    <div>
      <h1>Planet</h1>
      <h1>{planet.name}</h1>
      <h3>Climate: {planet.climate}</h3>
      <h3>Terrain: {planet.terrain}</h3>
      <h3>Surface Water: {planet.surface_water}</h3>
      <h3>Population: {planet.population}</h3>
    </div>
  )
}



export default Planets
