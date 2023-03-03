import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState();
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(()=>{
    (async()=>{
      const array = await loadPokemons();
      setPokemons(array);
    })();
  }, []);
  
  const loadPokemons = async () => {
    try{
      const pokemonsArray = [];
      const response  = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id:pokemonDetails.id,
          name:pokemonDetails.name,
          type:pokemonDetails.types[0].type.name,
          order:pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }
      return pokemonsArray;
    }catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
    </View>
  )
}

export default Pokedex
