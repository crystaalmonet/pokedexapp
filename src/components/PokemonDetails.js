import React from 'react';
import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'

// export default function PokemonDetail (props) {

//     return (
//     <h1>Gotta Catch Em All</h1>
//     )

// const PokemonDetail = ({ pokemon }) => {
//   if (!pokemon) {
//     return <div>Gotta Catch Em All!</div>;
//   }

//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <div>
//       {pokemon.results.map((pokemon, index) => (
//         <ul key={index}>
//           <li>
//             <Link to={`/details/${pokemon.url}`}>{pokemon.name}</Link>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
//     </div>
//   );
// };
// export default PokemonDetail;

// const url = `https://pokeapi.co/api/v2/pokemon`;

//   const [pokemon, setPokemon] = useState(null)

//   const getPokemon = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         //sets data as state
//         setPokemon(data)
//         console.log(data)
//     } catch (e) {
//         console.error(e)
//     }
// }
// useEffect(() => {
//   getPokemon();
// }, []);

export default function PokemonDetail (pokemonUrl) {
    console.log(pokemonUrl)
    // const url = `https://pokeapi.co/api/v2/pokemon/1/`;
    const url = {pokemonUrl}
    const [pokemon, setPokemon] = useState(null)
  
    const getPokemon = async () => {
      try {
          const response = await fetch(url);
          const data = await response.json();
          //sets data as state
          setPokemon(data)
          console.log(data)
      } catch (e) {
          console.error(e)
      }
  }
  useEffect(() => {
    getPokemon();
  }, []);


    return (
        <div>
    {/* <h1>Gotta Catch Em All</h1> */}
    {/* {pokemon?.moves?.map((move, index) => (
                <ul key={index}>
                    <li>
                        {move.name}
                    </li>
                </ul>
            ))}  */}
Details
    </div>
    )}