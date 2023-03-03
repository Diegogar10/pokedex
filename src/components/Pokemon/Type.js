import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash';
import getColorTypePokemon from '../../utils/getColorTypePokemon';
const Type = ({types}) => {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor:getColorTypePokemon(item.type.name) }}>
          <Text>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default Type;

const styles = StyleSheet.create({
  content : { 
    marginTop: 50, 
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center"
  }, 
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10, 
  }
});