import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { Icon, Header } from 'react-native-elements';

import ChatItem from './ChatItem';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          advisor: 'Jenny Test',
          lastMessage: 'I think you are on the right track...',
          thumbnail: 'https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?auto=compress&cs=tinysrgb&h=350'
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <ChatItem
      id={item.id}
      advisor={item.advisor}
      lastMessage={item.lastMessage}
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
          centerComponent={{ text: 'Chat', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => this.props.navigation.navigate('AddChat')}}
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
