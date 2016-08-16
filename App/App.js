import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  NavigatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderColor: 'blue',
    borderWidth: 5,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
});

import CounterScene from './CounterScene';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.onForwardHandler = this.onForward.bind(this);
  }

  onForward() {
    this.props.navigator.push({
      component: CounterScene,
      title: 'CounterScene',
      passProps: { count: this.state.count },
    });
  }

  render() {
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
      </View>
    );
  }
}

App.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default App;