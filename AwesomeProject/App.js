import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import PizzaTranslator from './src/pizza';
import Scroll from './src/scroll';
import ListView from './src/listview';
import Fetch from './src/fetch';
import Test from "./src/test"

export default function App() {
  const [press,setPress]=useState(false);
  return (
  <View style={styles.container}>
      {/* <PizzaTranslator/> */}
      {/* <Scroll/> */}
      {/* <ListView/> */}
      {/* <Fetch/> */}
      <Test/>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
