import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STOREGE } from "../utils/constants";

export async function getPokemonsFavoritesApi() {
  try{
    const response = await AsyncStorage.getItem(FAVORITE_STOREGE);
    return JSON.parse(response||[]);
  }catch (error) {
    throw error;
  }
}

export async function addPokemonFavorite (id) {
  try {
    const favorites = await getPokemonsFavoritesApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STOREGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoritesApi();
    return includes(response, id);
  }catch (error) {
    throw error;
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoritesApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STOREGE, JSON.stringify(newFavorites));
  }catch (error) {
    throw error;
  }
}