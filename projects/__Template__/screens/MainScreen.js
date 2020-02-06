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

export default class MainScreen extends Component {
     
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