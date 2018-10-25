import React, {Component} from 'react';
import Expo from 'expo';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

class IcedMenu extends React.Component {
  static navigationOptions = ({ navigation}) => {
	const params = navigation.state.params || {};
		return {
			headerTitle: 'Iced Menu',
		}
	};

render() {
      return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.row}>
            <Image source={require('./Iced Drinks/Javiva.jpg')}
              style={styles.image} />
            <Image source={require('./Iced Drinks/IcedBlackTea.jpg')}
              style={styles.image} />
          </View>

          <View style={styles.row}>
            <Image source={require('./Iced Drinks/IcedCoffee.jpg')}
              style={styles.image} />
            <Image source={require('./Iced Drinks/IcedGreenTea.jpg')}
              style={styles.image} />
          </View>

          <View style={styles.row}>
            <Image source={require('./Iced Drinks/IcedLatte.jpg')}
              style={styles.image} />
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
