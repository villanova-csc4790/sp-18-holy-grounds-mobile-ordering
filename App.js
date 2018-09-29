import React from 'react';
import LogIn from "/LogIn.js";
import Menu from "/Menu.js";
import Location from "/Location.js";
import { StackNavigator } from 'react-navigation';
const Navigation = StackNavigator(
{
    HomeScreen: {
        screen: LogIn,
    },
    MenuScreen: {
        screen: Menu,
    },
    LocationScreen: {
      screen: Location,
    }
},
{
  initialRouteName: 'HomeScreen',
  transitionConfig: () => ({    screenInterpolator: () => null }),
    
}
);

export default class App extends React.Component {
    render() {
        return <Navigation />;
    }
}
