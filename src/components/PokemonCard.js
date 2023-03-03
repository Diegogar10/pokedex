import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';
import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import getColorTypePokemon from '../utils/getColorTypePokemon';

const PokemonCard = ({pokemon}) => {
  
  const navigation = useNavigation();
  const pokemonColor = getColorTypePokemon(pokemon.type);
  const bgStyles = { backgroundColor:pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon} >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image}} style={styles.image}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5
  },
   bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10
   },
   number: {
    position: "absolute",
    right: 10,
    top: 10,
    color:"#fff",
   },
   name: {
    color:"#fff",
    fontWeight:"bold",
    fontSize: 15, 
    paddingTop: 10
   },
   image: {
    position:"absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
   },
})