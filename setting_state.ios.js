import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Flash extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};

    //This will toggle the state randomly up to one second....
    setInterval(() => {
      this.setState(previousState  => {
        return { showText: !previousState.showText };
      });
    }, Math.floor((Math.random() * 1000)));
    /*
    Realistically, I won't trigger setting of state from random time, but if
    I am running a reactnative application on top of a Ruby On Rails backend I'll
    be interacting with the server.
    */
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class FlashApp extends Component {
  render() {
    return (
      <View>
        <Flash text='I like to flash on the screen'/>
        <Flash text='I really do not know why'/>
        <Flash text='But it is all grand I guess?'/>
        <Flash text='At least that is what I am told' />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => FlashApp);
