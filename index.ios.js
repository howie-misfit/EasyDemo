/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class EasyDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  onIncrease() {
    let count = this.state.count + 1;
    this.setState({count: count});
    console.log("newCount:", count);
  }

  onDecrease() {
    let count = this.state.count - 1;
    this.setState({count: count});
    console.log("newCount:", count);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count: {this.state.count}
        </Text>
        <TouchableHighlight onPress={this.onIncrease.bind(this)}>
          <Text style={styles.button}>
            Increase
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onDecrease.bind(this)}>
          <Text style={styles.button}>
            Decrease
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderColor: 'blue',
    borderWidth: 5,
    padding: 5,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('EasyDemo', () => EasyDemo);
