import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Chat from './Chat';
import Notes from './Notes';
import Appointments from './Appointments'
import AddAppointment from './AddAppointment'
import AddChat from './AddChat'
import Profile from './Profile'

let screen = Dimensions.get('window');

const AppointmentStack = createStackNavigator({
  Appointments: {screen: Appointments},
  AddAppointment: {screen: AddAppointment},
  Profile: {screen: Profile},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const ChatStack = createStackNavigator({
  Chat: {screen: Chat},
  AddChat: {screen: AddChat},
  Profile: {screen: Profile},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const NoteStack = createStackNavigator({
  Notes: {screen: Notes},
  Profile: {screen: Profile},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});


export const Tabs = createBottomTabNavigator({
  'Appointments': {
    screen: AppointmentStack,
    navigationOptions: {
      tabBarLabel: 'Appointments',
      tabBarIcon: ({ tintColor }) => <Icon name="date-range" size={35} color={tintColor} />
    },
  },
  'Chat': {
    screen: ChatStack,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => <Icon name="chat-bubble-outline" size={35} color={tintColor} />
    },
  },
  'Notes': {
    screen: NoteStack,
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
