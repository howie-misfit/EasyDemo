import React, { Component } from 'react';
import {
  PushNotificationIOS,
  StyleSheet,
  View,
} from 'react-native';

import { Button } from '../Common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'blue',
  },
});


export default class BadgeExample extends Component {

  componentWillMount() {
    // Device token
    PushNotificationIOS.addEventListener('register', this.onDeviceRegistered);
  }

  componentWillUnmount() {
    // Device token
    PushNotificationIOS.removeEventListener('register', this.onDeviceRegistered);
  }

  onDeviceRegistered(token) {
    console.log('device token: ', token);
  }

  render() {
    PushNotificationIOS.requestPermissions();

    return (
      <View style={styles.container}>
        <Button
          onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}
          label="Set app's icon badge to 42"
        />
        <Button
          onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}
          label="Clear app's icon badge"
        />
      </View>
    );
  }
}
