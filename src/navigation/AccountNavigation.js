import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../screens/Account';


const Stack = createNativeStackNavigator(); 

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="AccountNavigation" component={Account} options={{title:"Cuenta"}} />
    </Stack.Navigator>
  )
}

export default AccountNavigation;
