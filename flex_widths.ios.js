import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class FixedDimensionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <Text>Sup</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => FixedDimensionBasics);
