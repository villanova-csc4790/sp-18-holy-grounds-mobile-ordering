import React, {Component} from 'react';
import Expo from 'expo';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HotMenu extends React.Component {
  static navigationOptions = ({ navigation}) => {
	const params = navigation.state.params || {};
		return {
			headerTitle: 'Hot Menu',
		}
	};

render() {
      return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.row}>
            <Image source={require('./Hot Drinks/Americano.jpg')}
              style={styles.image} />
            <Image source={require('./Hot Drinks/Cappuccino.jpg')}
              style={styles.image} />
          </View>

          <View style={styles.row}>
            <Image source={require('./Hot Drinks/ChaiTeaLatte.jpg')}
              style={styles.image} />
            <Image source={require('./Hot Drinks/Espresso.jpg')}
              style={styles.image} />
          </View>

          <View style={styles.row}>
            <Image source={require('./Hot Drinks/HotChocolate.jpg')}
              style={styles.image} />
           <Image source={require('./Hot Drinks/Latte.jpg')}
              style={styles.image} />
        </View>

        <View style={styles.row}>
          <Image source={require('./Hot Drinks/MatchaLatte.jpg')}
            style={styles.image} />
          <Image source={require('./Hot Drinks/MightyLeafTea.jpg')}
            style={styles.image} />
        </View>

        <View style={styles.row}>
          <Image source={require('./Hot Drinks/Mocha.jpg')}
            style={styles.image} />
        <Image source={require('./Hot Drinks/Coffee 1.jpg')}
            style={styles.image} />
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
