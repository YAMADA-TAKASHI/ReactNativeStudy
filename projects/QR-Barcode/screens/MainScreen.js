import React, { Component } from "react";
import { 
    View,
    FlatList,
    StyleSheet,
    Alert,
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
// import QRCode from 'react-native-qrcode-image';
import QRCode from 'react-native-qrcode-svg';
import Barcode from "react-native-barcode-builder";

export default class MainScreen extends Component {
     
    state = {
      text: 'hoge'
    }

    render() {
         return (
            <View style={styles.container}>
              <Text>Generate QR and barcode.</Text>
              <QRCode
                value={this.state.text}
                size={200}
              />
              <Barcode value={this.state.text} format="CODE128" />
              <Button
                onPress={() => this.setState({text: 'foo'})}
              />
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
  },
})