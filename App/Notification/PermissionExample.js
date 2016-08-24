import React, { Component } from 'react';
import {
  PushNotificationIOS,
  StyleSheet,
  Text,
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

export default class PermissionExample extends Component {

  constructor(props) {
    super(props);
    this.state = { permissions: null };
    this.showPermissions = this.showPermissions.bind(this);
  }

  showPermissions() {
    PushNotificationIOS.checkPermissions((permissions) => {
      this.setState({ permissions });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications Permissions:</Text>
        <Button
          onPress={this.showPermissions}
          label="Show enabled permissions"
        />
        <Text>
          {JSON.stringify(this.state.permissions)}
        </Text>
      </View>
    );
  }
}
