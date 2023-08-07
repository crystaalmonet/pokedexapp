// import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// // import PokemonDetail from './components/PokemonDetails';

// export default function PokemonList (pokemon) {
// //     const url = `https://pokeapi.co/api/v2/pokemon`;

// // const [pokemon, setPokemon] = useState(null)

// // const getPokemon = async () => {
// //   try {
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       //sets data as state
// //       setPokemon(data)
// //       console.log(data)
// //   } catch (e) {
// //       console.error(e)
// //   }
// // }
// // useEffect(() => {
// // getPokemon();
// // }, []);

//     return (
//     <div> 
//         {pokemon?.results?.map((pokemon, index) => (
//                 <ul key={index}>
//                     <li>
//                         {pokemon?.name}
//                     </li>
//                     <li>
//                         {/* {pokemon?.url} */}
//                         <Link to = '/details'>{pokemon?.name}</Link>
//                     </li>
//                 </ul>
//             ))} 
//     </div>
//     )
// }

