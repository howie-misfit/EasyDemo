import React, { Component } from 'react';
import {
  TabBarIOS,
} from 'react-native';


import BadgeExample from './BadgeExample';
import NotificationExample from './NotificationExample';
import PermissionExample from './PermissionExample';


export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Badge',
    };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="blue"
        barTintColor="darkslateblue"
      >
        <TabBarIOS.Item
          title="Badge"
          selected={this.state.selectedTab === 'Badge'}
          onPress={() => {
            this.setState({
              selectedTab: 'Badge',
            });
          }}
        >
          <BadgeExample />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Notification"
          selected={this.state.selectedTab === 'Notification'}
          onPress={() => {
            this.setState({
              selectedTab: 'Notification',
            });
          }}
        >
          <NotificationExample />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Permission"
          selected={this.state.selectedTab === 'Permission'}
          onPress={() => {
            this.setState({
              selectedTab: 'Permission',
            });
          }}
        >
          <PermissionExample />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
