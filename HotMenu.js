import React, {Component} from 'react';
import Expo from 'expo';
import {View, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, NavigatorIOS,} from 'react-native';
import { Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Colors from './Colors';
import Navbar from './Navbar';

class HotMenu extends React.Component {
  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

render() {
  var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('CoffeeScreen')} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('CartScreen')} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <ScrollView>
      <Navbar left={left} right={right} title='HOT MENU' style={{ fontSize: 25, color: 'white'}}/>
      <View style={styles.container}>
      
      <View style={styles.row}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AmericanoScreen')}>
      <Image source={require('./Hot Drinks/Americano.jpg')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CappuccinoScreen')}>
      <Image source={require('./Hot Drinks/Cappuccino.jpg')}
style={styles.image} />
</TouchableOpacity>
      </View>

          <View style={styles.row}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChaiTeaLatteScreen')}>
            <Image source={require('./Hot Drinks/ChaiTeaLatte.jpg')}
              style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EspressoScreen')}>
            <Image source={require('./Hot Drinks/Espresso.jpg')}
              style={styles.image} />
              </TouchableOpacity>
          </View>

          <View style={styles.row}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HotChocolateScreen')}>
            <Image source={require('./Hot Drinks/HotChocolate.jpg')}
              style={styles.image} />
              </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('LatteScreen')}>
           <Image source={require('./Hot Drinks/Latte.jpg')}
              style={styles.image} />
              </TouchableOpacity>
        </View>

        <View style={styles.row}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('MatchaLatteScreen')}>
          <Image source={require('./Hot Drinks/MatchaLatte.jpg')}
            style={styles.image} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('MightyLeafTeaScreen')}>
          <Image source={require('./Hot Drinks/MightyLeafTea.jpg')}
            style={styles.image} />
             </TouchableOpacity>
        </View>

        <View style={styles.row}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('MochaScreen')}>
          <Image source={require('./Hot Drinks/Mocha.jpg')}
            style={styles.image} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('Coffee1Screen')}>
        <Image source={require('./Hot Drinks/Coffee.jpg')}
            style={styles.image} />
             </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
}

export default HotMenu;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  row:{
    flex:1,
    flexDirection: 'row',
    maginBottom: 10,
  },
  image: {
  flex: 1,
  width: 200,
  height: 200,
  resizeMode: 'contain',
  paddingLeft: 10,
  marginTop: 10,
  paddingRight: 10
  },
});
