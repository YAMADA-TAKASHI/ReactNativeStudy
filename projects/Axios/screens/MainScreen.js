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
    // Movie一覧取得
    axios.post("http://www.sweet.jp", {
      userid: 'takashi.yamada@tanita.co.jp',
      password: 'takashi'
    })
    .then(res => {
      console.log('ログイン成功');
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