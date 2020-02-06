import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import createStore from "../stores/createStore";

//screens
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from "../screens/SettingsScreen";

//store
const store = createStore();

//stack
const Stack = createStackNavigator(
  {
      Home: HomeScreen,
      About: AboutScreen,
  },
  {
      initialRouteName: 'Home',
  }
);

//tabs
const Tabs = createBottomTabNavigator(
  {
    Top: Stack,
    Settings: SettingsScreen
  }
);

const AppContainer = createAppContainer(Tabs);

//main
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}