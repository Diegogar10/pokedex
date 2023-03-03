import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const NotLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que inicar sesión
      </Text>
      <Button title='Ir a login' onPress={() => navigation.navigate("Account")} />
    </View>
  )
}

export default NotLogged;

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal:50
  },
  text: {
    textAlign: "center",
    marginBottom: 10
  }
});