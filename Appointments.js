import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import AddAppointment from './AddAppointment';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { Icon, Header } from 'react-native-elements';

import AppointmentItem from './AppointmentItem';

export default class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          advisor: 'Dan Rather',
          date: '10/13 @ 3pm',
          thumbnail: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 2,
          advisor: 'John Stockton',
          date: '10/15 @ 3pm',
          thumbnail: 'https://images.pexels.com/photos/542282/pexels-photo-542282.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 3,
          advisor: 'Jenny Test',
          date: '10/17 @ 3pm',
          thumbnail: 'https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?auto=compress&cs=tinysrgb&h=350'
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <AppointmentItem
      id={item.id}
      advisor={item.advisor}
      date={item.date}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'person', color: '#fff', onPress: () => this.props.navigation.navigate('Profile')}}
          centerComponent={{ text: 'Appointments', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => this.props.navigation.navigate('AddAppointment')}}
        />
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
