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
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    borderColor: '#ff0000',
    borderWidth: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    marginRight: 20,
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
          style={styles.leftButton}
          onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}
          label="update badge"
        />
        <Button
          style={styles.rightButton}
          onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}
          label="clear"
        />
      </View>
    );
  }
}
