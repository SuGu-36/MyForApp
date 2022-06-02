import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {data1} from '../defaultData/data1';
import RenderItem1 from '../subComp/renderItem1';
const Item1 = () => {
  const [enteredGoal, setEnteredGoal] = useState(data1);
  const onPressText = goalTitle => {
    setEnteredGoal(enteredGoal.filter(CurrGoal => goalTitle !== CurrGoal.id));
  };
  return (
    <View>
      <View>
        <Text style={{fontSize: 30, ...style.ex}}>
          Hi! Welcome to Metaverse...
        </Text>
      </View>
      <View>
        <FlatList
          data={enteredGoal}
          keyExtractor={item => item.id}
          renderItem={renderItems => {
            return (
              <View>
                <RenderItem1 {...renderItems.item} onDelete={onPressText} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  ex: {
    backgroundColor: 'yellow',
    color: 'blue',
  },
});
export default Item1;
