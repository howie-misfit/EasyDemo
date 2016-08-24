import React, { Component } from 'react';
import {
  AlertIOS,
  PushNotificationIOS,
  StyleSheet,
  View,
  DeviceEventEmitter,
} from 'react-native';

import { Button } from '../Common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

  sendLocalNotification() {
    DeviceEventEmitter.emit('localNotificationReceived', {
      aps: {
        alert: 'Sample local notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE',
      },
    });
  }

  sendNotification() {
    DeviceEventEmitter.emit('remoteNotificationReceived', {
      aps: {
        alert: 'Sample notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE',
      },
    });
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
