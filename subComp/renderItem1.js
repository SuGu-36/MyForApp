import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
const RenderItem1 = props => {
  // const {id, name, title, clas} = props.item;
  return (
    <Pressable onPress={() => props.onDelete.bind(this, props.id)}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 5,
          margin: 10,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 24, color: 'white'}}>{props.name}</Text>
        <Text style={{fontSize: 24, color: 'white'}}>{props.title}</Text>
        <Text style={{fontSize: 24, color: 'white'}}>{props.clas}</Text>
      </View>
    </Pressable>
  );
};

export default RenderItem1;
