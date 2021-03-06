import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ff0000',
    borderWidth: 2,
  },
  button: {
    borderColor: 'blue',
    borderWidth: 5,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
});

import CounterScene from './CounterScene';
import Notification from './Notification';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.onForwardHandler = this.onForward.bind(this);
    this.onNotificationButtonTapped = this.onNotificationButtonTapped.bind(this);
    this.onCountChangedHandle = this.onCountChanged.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  onCountChanged(newCount) {
    this.setState({ count: newCount });
    console.log('countChanged:', newCount);
  }

  onForward() {
    this.props.navigator.push({
      component: CounterScene,
      title: 'CounterScene',
      passProps: { count: this.state.count,
       onCountChanged: this.onCountChangedHandle,
      },
    });
  }

  onNotificationButtonTapped() {
    this.props.navigator.push({
      component: Notification,
      title: 'Notification',
    });
  }

  render() {
    console.log('render App');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count: {this.state.count}
        </Text>
        <TouchableHighlight onPress={this.onForwardHandler}>
          <Text style={styles.button}>
            ChangeCount
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onNotificationButtonTapped}>
          <Text style={styles.button}>
            Notification
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

App.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default App;
