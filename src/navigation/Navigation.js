import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountNavigation from "./AccountNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator(); 

export default function Navigation () {
  return(
    <Tab.Navigator initialRouteName="Pokedex" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Favorites" 
        component={FavoriteNavigation} 
        options={
          {
            tabBarLabel: "Mis Favoritos",
            tabBarIcon: ({color, size}) => (<Icon name="heart" color={color} size={size}/>),
          }
        }
      />
      <Tab.Screen 
        name="Pokedex" 
        component={PokedexNavigation} 
        options={
          {
            tabBarLabel: "Pokemons",
            tabBarIcon: () => renderPokeball(),
          }
        }
      />
      <Tab.Screen 
        name="Account" 
        component={AccountNavigation}
        options={
          {
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({color, size}) => (<Icon name="user" color={color} size={size}/>),
          }
        } 
      />
  
    </Tab.Navigator>
  )
}

function renderPokeball () {
  return (
    <Image 
      source={require("../assets/pokeball.png")}
      style={{ width:65, height:65, top:-20}}
    />
  )
}