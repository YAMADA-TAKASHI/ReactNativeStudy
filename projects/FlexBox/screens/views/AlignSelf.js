import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlignSelf extends Component {
  render() {
    return (
    // Try setting `alignItems` to 'flex-start'
    // Try setting `justifyContent` to `flex-end`.
    // Try setting `flexDirection` to `row`.
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 30, height: 100, backgroundColor: 'steelblue', alignSelf: "center"}} />
    </View>
    );
  }
};
    