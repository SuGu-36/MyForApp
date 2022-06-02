import React, {useState} from 'react';
import axios from 'axios';
import {
  ScrollView,
  StyleSheet,
  View,
  Modal,
  Pressable,
  Text,
  TextInput,
} from 'react-native';

export const Item2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, onChangeText] = React.useState('');
  console.log(username);
  const [password, onChangeNumber] = React.useState('');
  console.log(password);
  const onSubmit = () => {
    axios
      .put('https://reqres.in/api/users', {
        body: {
          first_name: username,
          last_name: password,
        },
      })
      .then(res => JSON.stringify(res.data))
      .then(data => console.log(data))
      .catch(err => console.log(err));

    axios
      .get('https://reqres.in/api/users')
      .then(res => JSON.stringify(res.data))
      .then(data => console.log())
      .catch(err => console.log(err));

    setModalVisible(modalVisible => !modalVisible);
    onChangeNumber('');
    onChangeText('');
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={false}
        visible={modalVisible}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            {/* <Text style={Styles.modalText}>Hello World!</Text> */}
            <TextInput
              style={Styles.modalInput}
              onChangeText={onChangeText}
              placeholderTextColor="green"
              placeholder="Username"
              value={username}></TextInput>
            <TextInput
              style={Styles.modalInput}
              onChangeText={onChangeNumber}
              keyboardType="number-pad"
              placeholder="Password"
              placeholderTextColor="green"
              value={password}></TextInput>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={onSubmit}>
              <Text style={Styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[Styles.button, Styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={Styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    color: 'black',
    borderColor: 'green',
    borderWidth: 1,
    width: 200,
    margin: 10,
    borderRadius: 10,
  },
});
