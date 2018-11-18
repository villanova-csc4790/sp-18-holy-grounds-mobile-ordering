import React, {Component} from 'react';
import Expo from 'expo';
import {View, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, NavigatorIOS,} from 'react-native';
import { Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Colors from './Colors';
import Navbar from './Navbar';


class IcedMenu extends React.Component {
 static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

render() {
  var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('LocationsScreen')} transparent>
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
      <Navbar left={left} right={right} title='ICED MENU' style={{ fontSize: 25, color: 'white'}}/>
     <View style={styles.container}>
    
     <View style={styles.row}>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('JavivaScreen')}>
     <Image source={require('./Iced Drinks/Javiva.jpg')} style={styles.image} />
     </TouchableOpacity>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('IcedCoffeeScreen')}>
     <Image source={require('./Iced Drinks/IcedCoffee.jpg')}
style={styles.image} />
</TouchableOpacity>
     </View>

         <View style={styles.row}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('IcedLatteScreen')}>
           <Image source={require('./Iced Drinks/IcedLatte.jpg')}
             style={styles.image} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('IcedGreenTeaScreen')}>
           <Image source={require('./Iced Drinks/IcedGreenTea.jpg')}
             style={styles.image} />
             </TouchableOpacity>
         </View>

         <View style={styles.row}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('IcedBlackTeaScreen')}>
           <Image source={require('./Iced Drinks/IcedBlackTea.jpg')}
             style={styles.image} />
             </TouchableOpacity>
       </View>



     </View>
   </ScrollView>
 );
}
}

export default IcedMenu;
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white',
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

