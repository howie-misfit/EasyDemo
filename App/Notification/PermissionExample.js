import React, { Component } from 'react';
import {
  PushNotificationIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class PermissionExample extends Component {

  constructor(props) {
    super(props);
    this.state = { permissions: null };
    this.showPermissions = this.showPermissions.bind(this);
  }

  componentDidMount() {
    this.showPermissions();
  }

  showPermissions() {
    console.log('showPermissions');
    PushNotificationIOS.checkPermissions((permissions) => {
      this.setState({ permissions });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications Permissions:</Text>
        <Text>
          {JSON.stringify(this.state.permissions)}
        </Text>
      </View>
    );
  }
}
