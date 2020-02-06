import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContentBasics extends Component {
    render() {
      return (
        // Try setting `justifyContent` to `center`.
        // Try setting `flexDirection` to `row`.
        /**
         * @justifyContent
         * flex-start
         * flex-end
         * center
         * space-between
         * space-around
         * space-evenly
         */
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  };