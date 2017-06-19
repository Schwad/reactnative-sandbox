import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}! Desc: {this.props.description}</Text>
    );
  }
}

export default class MuchosWelcomes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome style={styles.instructions} name='Rexxar' description='Hunter class' />
        <Welcome style={styles.instructions} name='Jaina' description='Mage. Annoying.' />
        <Welcome style={styles.instructions} name='Valeera' description='Crap I should know this but I dont remember.' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject2', () => MuchosWelcomes);
// AppRegistry.registerComponent('AwesomeProject2', () => Welcome);
