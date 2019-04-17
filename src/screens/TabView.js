import * as React from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Button } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081',justifyContent:'center',alignItems:'center' }]} >
    <Button title="click" onPress={this.buttonClick}></Button>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7', justifyContent:'center',alignItems:'center' }]} >
      <ActivityIndicator size="large" />
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4023' }]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#e2e2e2' }]} />
);
const FifthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'A' },
      { key: 'second', title: 'B' },
      { key: 'third', title: 'C' },
      { key: 'fourth', title: 'D' },
      { key: 'fifth', title: 'E' },
    ],
  };

  buttonClick(){
    alert('Hiiiiii');
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute,
          fifth: FifthRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});