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
      selectedTab: 'BadgeExample',
    };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue"
      >
        <TabBarIOS.Item
          title="BadgeExample"
          selected={this.state.selectedTab === 'BadgeExample'}
          onPress={() => {
            this.setState({
              selectedTab: 'BadgeExample',
            });
          }}
        >
          <BadgeExample />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="NotificationExample"
          selected={this.state.selectedTab === 'NotificationExample'}
          onPress={() => {
            this.setState({
              selectedTab: 'NotificationExample',
            });
          }}
        >
          <NotificationExample />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="PermissionExample"
          selected={this.state.selectedTab === 'PermissionExample'}
          onPress={() => {
            this.setState({
              selectedTab: 'PermissionExample',
            });
          }}
        >
          <PermissionExample />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
