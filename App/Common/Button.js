import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'blue',
  },
});

export default class Button extends Component {

  render() {
    return (
      <TouchableHighlight
        underlayColor={'white'}
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonLabel}>
          {this.props.label}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
};
