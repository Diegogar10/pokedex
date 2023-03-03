import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, getPokemonsFavoritesApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

const Favorite = ({id}) => {

  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite? FontAwesome: FontAwesome5;
  useEffect(()=>{
    (async ()=>{
      try{
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      }catch (error) {
        setIsFavorite(false);
      }
    })()
  },[id,reloadCheck])

  const onRealoadCheckFavorite = () =>{
    setReloadCheck(prev=>!prev)
  }

  const addFavorite = async()=> {
    await addPokemonFavorite(id);
    onRealoadCheckFavorite();
  }

  const removeFavorites = async() => {
    try{
      await removePokemonFavoriteApi(id);
      onRealoadCheckFavorite();
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <Icon 
      name="heart" 
      color="#fff" 
      size={20} 
      onPress={isFavorite? removeFavorites : addFavorite} 
      style={{marginRight: 20}}/>
    )
}

export default Favorite;
