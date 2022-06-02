import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Item4 = () => {
  // const resp = await fetch('https://fakestoreapi.com/products/1');
  // const data = await resp.json();
  // console.log(data);
  //========================================
  //  fetch("https://fakestoreapi.com/products")
  //.then((res) => res.json())
  // .then((json) => console.log(json));
  //============================
  //   fetch("https://fakestoreapi.com/products", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "https://i.pravatar.cc",
  //     category: "electronic",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  //===========================================

  //     fetch("https://fakestoreapi.com/products/7", {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "https://i.pravatar.cc",
  //     category: "electronic",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  //=========================================
  //   fetch("https://fakestoreapi.com/products/8", {
  //   method: "PATCH",
  //   body: JSON.stringify({
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "https://i.pravatar.cc",
  //     category: "electronic",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  //=========================================
  //   fetch("https://fakestoreapi.com/products/8", {
  //   method: "DELETE",
  // });
  //=========================================
  const [state, setState] = useState([]);
  const getDataUsingSimpleGetCall = async () => {
    axios
      .get('https://fakestoreapi.com/products/1')
      .then(function (response) {
        // handle success
        // console.log(JSON.stringify(response.data));
        const data = JSON.stringify(response.data);

        console.log(data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );

      const data = response.data;

      //const {id, userId, title, body} = JSON.parse(data);
      //console.log(userId, title);

      setState([data]); //============================>>>>
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };
  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Example of Axios Networking in React Native
        </Text>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={getDataUsingSimpleGetCall}>
          <Text>Hello</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={getDataUsingAsyncAwaitGetCall}>
          {/*=====================> */}
          {state.map((value, index) => {
            return (
              <View key={index}>
                <Text>{state[index].title}</Text>
                <Text>{value.body}</Text>
              </View>
            );
          })}
          {/* {<Text>{ state.length > 0 && state[0]?.title}</Text>} */}

          <Text>Get Data Using Async Await GET</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={postDataUsingSimplePostCall}>
          <Text>Post Data Using POST</Text>
        </TouchableOpacity>
        {/* 
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={multipleRequestsInSingleCall}>
          <Text>Multiple Concurrent Requests In Single Call</Text>
        </TouchableOpacity>
    */}
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonStyle: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 16,
  },
});
export default Item4;
