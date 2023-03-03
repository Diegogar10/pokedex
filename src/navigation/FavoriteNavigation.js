import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Favorites from '../screens/Favorites';
import Pokemon from '../screens/Pokemon'
const Stack = createNativeStackNavigator(); 

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  
        name="FavoritesNavigation" 
        component={Favorites} 
        options={{title:"Favoritos"}} />
      <Stack.Screen
        name='pokemon'
        component={Pokemon}
        options={{
          title:"",
          headerTransparent: true
        }}
      />
    </Stack.Navigator>

  )
}

export default FavoriteNavigation;
