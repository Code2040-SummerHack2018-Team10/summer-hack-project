import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { Icon, Header } from 'react-native-elements';

import AppointmentItem from './AppointmentItem';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          advisor: 'John Stockton',
          date: '10/15 @ 3pm',
          thumbnail: 'https://images.pexels.com/photos/542282/pexels-photo-542282.jpeg?auto=compress&cs=tinysrgb&h=350'
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
          leftComponent={{ icon: 'person', color: '#fff' }}
          centerComponent={{ text: 'Notes', style: { color: '#fff' } }}
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
