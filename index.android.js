/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// import App from './App/App';
import Navigation from './App/Navigation/Navigation';

class EasyDemo extends Component {

  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('EasyDemo', () => EasyDemo);
