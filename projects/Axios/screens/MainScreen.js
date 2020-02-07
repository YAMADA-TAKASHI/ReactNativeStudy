import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { 
  Text,
  Button,
} from "native-base";

import axios from 'axios';

export default class MainScreen extends Component {
  
  constructor() {
    super()
    this.state = {
      movies: []
    }

    var params = new URLSearchParams();
    params.append('param1', '1');
    params.append('param2', 'test');

    // Movie一覧取得
    axios.post("http://www.yahoo.co.jp/", params)
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>テンプレート</Text>
      </SafeAreaView>
    )
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})