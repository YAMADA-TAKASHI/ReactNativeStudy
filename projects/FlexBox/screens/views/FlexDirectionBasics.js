import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
      return (
        // Try setting `flexDirection` to `column`.
        /**
         * @flexDirection
         * row
         * column
         * row-reverse
         * column-reverse
         */
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  };
