import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './Router';
import { Font, AppLoading } from 'expo'
import { MaterialIcons } from '@expo/vector-icons'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fontsAreLoaded: false
    }
  }
  async componentWillMount() {
    await Font.loadAsync({ 'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf') })
    this.setState({ fontsAreLoaded: true })
  }

  render() {
    const { fontsAreLoaded } = this.state
    return !fontsAreLoaded ? <AppLoading /> : <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
