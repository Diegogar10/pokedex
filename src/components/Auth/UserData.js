import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getPokemonsFavoritesApi } from '../../api/favorite';
import useAuth from '../../hooks/useAuth';

const UserData = () => {
  const { auth, logout } = useAuth();
  const [ total, setTotal ] = useState(0);

  useFocusEffect(
    useCallback(()=>{
      (async()=>{
        try {
          const response = await getPokemonsFavoritesApi();
          setTotal(size(response));
        }catch (error) {
          throw error;
        }
      })()
    },[])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`}/>
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemos`} />
      </View>
      <Button title='Desconectarse' onPress={logout} />
    </View>
  )
}

export default UserData;

function ItemMenu(props) {
  const {title, text} = props;
  return(
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom:20
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120
  }
});