import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TeamRedScreen from '../screens/TeamRedScreen';
import TeamBlueScreen from '../screens/TeamBlueScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const TeamRedStack = createStackNavigator({
  TeamRed: TeamRedScreen,
});

TeamRedStack.navigationOptions = {
  tabBarLabel: 'Team Red',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-bonfire`
          : 'md-bonfire'
      }
    />
  ),
};

const TeamBlueStack = createStackNavigator({
  TeamBlue: TeamBlueScreen,
});

TeamBlueStack.navigationOptions = {
  tabBarLabel: 'Team Blue',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-water`
          : 'md-water'
      }
    />
  ),
};

const tabBarOptions = {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: '#35373a',
  },
}

const TabNavigatorConfig = {tabBarOptions }

export default createBottomTabNavigator({
  HomeStack,
  TeamRedStack,
  TeamBlueStack
}, TabNavigatorConfig
);
