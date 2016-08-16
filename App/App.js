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
  },
  button: {
    borderColor: 'blue',
    borderWidth: 5,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.onIncreaseHandler = this.onIncrease.bind(this);
    this.onDecreaseHandler = this.onDecrease.bind(this);
  }

  onIncrease() {
    const count = this.state.count + 1;
    this.setState({ count });
    console.log('newCount:', count);
  }

  onDecrease() {
    const count = this.state.count - 1;
    this.setState({ count });
    console.log('newCount:', count);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count: {this.state.count}
        </Text>
        <TouchableHighlight onPress={this.onIncreaseHandler}>
          <Text style={styles.button}>
            Increase
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onDecreaseHandler}>
          <Text style={styles.button}>
            Decrease
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App;
