import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Appointments from './Appointments';
import Chat from './Chat';
import Notes from './Notes';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'Appointments': {
    screen: Appointments,
    navigationOptions: {
      tabBarLabel: 'Appointments',
      tabBarIcon: ({ tintColor }) => <Icon name="date-range" size={35} color={tintColor} />
    },
  },
  'Chat': {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => <Icon name="chat-bubble-outline" size={35} color={tintColor} />
    },
  },
  'Notes': {
    screen: Notes,
    navigationOptions: {
      tabBarLabel: 'Notes',
      tabBarIcon: ({ tintColor }) => <Icon name="assignment" size={35} color={tintColor} />
    },
  },
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};
