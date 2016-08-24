import React, { Component } from 'react';
import {
  AlertIOS,
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
});

class NotificationExample extends Component {
  componentWillMount() {
    // Add listener for push notifications
    PushNotificationIOS.addEventListener('notification', this.onNotification);
    // Add listener for local notifications
    PushNotificationIOS.addEventListener('localNotification', this.onLocalNotification);
  }

  componentWillUnmount() {
    // Remove listener for push notifications
    PushNotificationIOS.removeEventListener('notification', this.onNotification);
    // Remove listener for local notifications
    PushNotificationIOS.removeEventListener('localNotification', this.onLocalNotification);
  }

  sendNotification() {
    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
      aps: {
        alert: 'Sample notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE',
      },
    });
  }

  sendLocalNotification() {
    require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
      aps: {
        alert: 'Sample local notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE',
      },
    });
  }

  onNotification(notification) {
    AlertIOS.alert(
      'Push Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  onLocalNotification(notification) {
    AlertIOS.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.sendNotification}
          label="Send fake notification"
        />

        <Button
          onPress={this.sendLocalNotification}
          label="Send fake local notification"
        />
      </View>
    );
  }

}

export default NotificationExample;
