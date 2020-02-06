import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { 
  Text,
} from "native-base";

export default class MainScreen extends Component {
     
  render() {
    const list = [
      { id: 1, text: 'user1', icon: 'user1@test.com', memo: 'memo1' },
      { id: 2, text: 'user2', icon: 'user2@test.com', memo: 'memo2' },
      { id: 3, text: 'user3', icon: 'user3@test.com', memo: 'memo3' },
      { id: 4, text: 'user4', icon: 'user4@test.com', memo: 'memo4' },
      { id: 5, text: 'user5', icon: 'user5@test.com', memo: 'memo5' },
    ]

    const btns = [];
    const data = [
      [
        { id: 1, text: "FlexDirection1", color: "#333333"},
        { id: 2, text: "FlexDirection2", color: "#666666" }
      ],
      [
        { id: 3, text: "FlexDirection3", color: "#999999" },
        { id: 4, text: "FlexDirection4", color: "#cccccc" }
      ],
    ];
    
    //ボタンのドムを作る
    data.map(array => {
      btns.push(
        <View style={styles.listrow}>
          {
            array.map(val => {
              // return <Text style={[{backgroundColor: val.color}, styles.button]}>{val.text}</Text>
              return <Button style={styles.button} key={val.id} title={val.text} />;
            })
          }
        </View>
      );
    });
    
    return (
      <SafeAreaView style={styles.container}>
        {
          btns
        }
      </SafeAreaView>
    )
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listrow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    color: 'white',
  }

})