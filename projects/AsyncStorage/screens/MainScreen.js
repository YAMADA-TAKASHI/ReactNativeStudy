import React, { Component } from "react";
import { 
    FlatList,
    AsyncStorage,
    Alert,
    StyleSheet,
 } from "react-native";
import { 
    Container,
    Header,
    Left,
    Body,
    Right,
    View,
    Title,
    Content,
    Button,
    List,
    ListItem,
    Text,
    Icon,
    Switch,
    Thumbnail
 } from "native-base";

 type Props = {}
 export default class MainScreen extends Component<Props> {
     
  storeData = async (name) => {
    try {
      await AsyncStorage.setItem('name', name)
    } catch (error) {
      console.log(error)
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name')
      if (value != null) {
        Alert.alert('We have ' + value)
      } else {
        Alert.alert('We have no data')
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button transparent
          onPress={()=>this.storeData('Yamada')}>
          <Text>保存</Text>
        </Button>
        <Button transparent
          onPress={()=>this.getData()}>
          <Text>取得</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
