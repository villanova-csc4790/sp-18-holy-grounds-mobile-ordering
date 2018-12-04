import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, NavigatorIOS} from 'react-native';
import Expo from 'expo';
import {Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col,Toast, Text as NBText,
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import HotMenuScreen from './HotMenu';
import IcedMenuScreen from './IcedMenu';

import Colors from './Colors';
import Navbar from './Navbar';

class CoffeeType extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      header: null,
    };
  };

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate('LocationsScreen')}
          transparent>
          <Icon name="ios-arrow-back" />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate('CartScreen')}
          transparent>
          <Icon name="ios-cart" />
        </Button>
      </Right>
    );
    return (
      <View style={styles.container}>
        <Navbar
          left={left}
          right={right}
          title="HOT MENU"
          style={{ fontSize: 25, color: 'white' }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HotMenuScreen')}
          style={styles.button2}>
          <Text style={styles.paragraph}>Hot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('IcedMenuScreen')}
          style={styles.button2}>
          <Text style={styles.paragraph}>Iced</Text>
        </TouchableOpacity>
              }} />
      </View>
    );
  }
}

export default CoffeeType;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Optima',
  },
  button2: {
    marginTop: 80,
    paddingTop: 15,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: '20%',
    borderWidth: 2,
    top: 50,
    width: 170,
    height: 170,
    backgroundColor: '#0A547B',
    borderRadius: 100,
  },
});
