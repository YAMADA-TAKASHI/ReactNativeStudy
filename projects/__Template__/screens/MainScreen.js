import React, { Component } from "react";
import { 
    View,
    FlatList,
    StyleSheet,
} from "react-native";
import { 
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Button,
    Content,
    List,
    ListItem,
    Text,
    Icon,
    Switch,
    Thumbnail
} from "native-base";

export default class MainScreen extends Component {
     
  render() {
    return (
      <Container style={styles.container}>
        <Text>テンプレ</Text>
      </Container>
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