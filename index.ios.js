/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

import App from './App/App';

class EasyDemo extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'Counter',
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

AppRegistry.registerComponent('EasyDemo', () => EasyDemo);
