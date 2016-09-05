import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  PixelRatio,
} from 'react-native';

import TappableRow from './TappableRow';

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 64,
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
});

class MyVeryComplexScene extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
        <TappableRow
          text="Tap me to load the next scene"
          onPress={this.props.onPushRoute}
        />
        <TappableRow
          text="Tap me to go back"
          onPress={this.props.onPopRoute}
        />
      </ScrollView>
    );
  }
}

MyVeryComplexScene.propTypes = {
  onPushRoute: React.PropTypes.func.isRequired,
  onPopRoute: React.PropTypes.func.isRequired,
  route: React.PropTypes.object.isRequired,
};

export default MyVeryComplexScene;
