/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Item1 from './components/item1';
import {Item2} from './components/Item2';
import Item4 from './components/Item4';
import {ScrollView, View, StatusBar} from 'react-native';
import {data1} from './defaultData/data1';
const App = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="slide"
      />

      <SafeAreaView
        style={{backgroundColor: 'pink'}}
        onReady={() => SplashScreen.hide()}>
        <Item4 />
        <Item1 />
        <Item2 />
      </SafeAreaView>
    </View>
  );
};
export default App;
