import React, { Component } from 'react';
import {
  StyleSheet,
  NavigationCardStack,
} from 'react-native';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

import MyVeryComplexScene from './MyVeryComplexScene';

export default class Navigator extends Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);

    // bind event handler
    this.onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this.onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

    this.renderScene = this.renderScene.bind(this);
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  renderScene(sceneProps) {
    return (
      <MyVeryComplexScene
        route={sceneProps.scene.route}
        onPushRoute={this.onPushRoute}
        onPopRoute={this.onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this.onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this.renderScene}
        style={styles.navigator}
      />
    );
  }
}

Navigator.propTypes = {
  onNavigationChange: React.PropTypes.func.isRequired,
  onExit: React.PropTypes.func.isRequired,
  navigationState: React.PropTypes.object.isRequired,
};
