import React from 'react';
import LogIn from "/LogIn.js";
import HotMenu from "/HotMenu.js";
import IcedMenu from "/IcedMenu.js";
import Location from "/Location.js";
import CoffeeType from "/CoffeeType.js";
import AmericanoInfo from "/AmericanoInfo.js";
import CappuccinoInfo from "/CappuccinoInfo.js";
import LatteInfo from "/LatteInfo.js";
import ChaiTeaLatteInfo from "/ChaiTeaLatteInfo.js";
import CoffeeInfo from "/CoffeeInfo.js";
import EspressoInfo from "/EspressoInfo.js";
import HotChocolateInfo from "/HotChocolateInfo.js";
import MatchaLatteInfo from "/MatchaLatteInfo.js";
import MightyLeafTeaInfo from "/MightyLeafTeaInfo.js";
import MochaInfo from "/MochaInfo.js";
import JavivaInfo from "/JavivaInfo.js"
import IcedCoffeeInfo from "/IcedCoffeeInfo.js"
import IcedGreenTeaInfo from "/IcedGreenTeaInfo.js"
import IcedBlackTeaInfo from "/IcedBlackTeaInfo.js"
import IcedLatteInfo from "/IcedLatteInfo.js"
import Cart from "./Cart.js"
import Checkout from "./Checkout.js"
import { StackNavigator } from 'react-navigation';
const Navigation = StackNavigator(
{
    HomeScreen: {
        screen: LogIn,
    },
    HotMenuScreen: {
        screen: HotMenu,
    },
    IcedMenuScreen: {
        screen: IcedMenu,
    },
    LocationScreen: {
      screen: Location,
    },
    CoffeeScreen:{
      screen: CoffeeType,
    },
    AmericanoScreen:{
      screen: AmericanoInfo,
    },
    CappuccinoScreen:{
      screen: CappuccinoInfo,
    },
    LatteScreen:{
      screen: LatteInfo,
    },
    ChaiTeaLatteScreen:{
      screen: ChaiTeaLatteInfo,
    },
    Coffee1Screen: {
        screen: CoffeeInfo,
    },
     EspressoScreen: {
        screen: EspressoInfo,
    },
     HotChocolateScreen: {
        screen: HotChocolateInfo,
    },
    MatchaLatteScreen: {
        screen: MatchaLatteInfo,
    },
     MightyLeafTeaScreen: {
        screen: MightyLeafTeaInfo,
    },
     MochaScreen: {
        screen: MochaInfo,
    },
    JavivaScreen: {
        screen: JavivaInfo,
    },
     IcedCoffeeScreen: {
        screen: IcedCoffeeInfo,
    },
     IcedBlackTeaScreen: {
        screen: IcedBlackTeaInfo,
    },
     IcedGreenTeaScreen: {
        screen: IcedGreenTeaInfo,
    },
     IcedLatteScreen: {
        screen: IcedLatteInfo,
    },
    CartScreen: {
      screen: Cart,
    },
     CheckoutScreen: {
      screen: Checkout,
    },
},
{
  initialRouteName: 'HomeScreen',
  transitionConfig: () => ({    screenInterpolator: () => null }),
    
}
);

export default class App extends React.Component {
    render() {
        return <Navigation />;
    }
}
