import React from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList (props) {
  const { pokemons, loadPokemons } = props;
  
  /* const loadMore = () => {
    loadPokemons();

  } */
  return (
    pokemons && <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon)=>String(pokemon.id)}
      renderItem={({item})=><PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListConctentContainer}
      //onEndReached={loadMore}
      ListFooterComponent={
        <ActivityIndicator size="large" color="#AEAEAE" style={styles.spinner} />
      }
    /> || <View><Text>Cargando</Text></View> 
  )
}

const styles = StyleSheet.create({
  flatListConctentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android'? 30 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android'? 90 : 60,
  }
})