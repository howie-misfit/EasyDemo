import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default class TappableRow extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}


TappableRow.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};
