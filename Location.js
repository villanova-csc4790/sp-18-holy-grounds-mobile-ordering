import React from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, NavigatorIOS} from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import MenuScreen from "./Menu";

class Location extends React.Component {
  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

  render() {
      return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuScreen')} style={styles.button2}>
        <Text style={styles.paragraph}>Bartley</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuScreen')}
        style={styles.button2}>
        <Text style={styles.paragraph}>Connelly </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuScreen')}
        style={styles.button2}>
        <Text style={styles.paragraph}>CEER </Text>
      </TouchableOpacity>
            }} />
    </View>
  );
}
}

export default Location;
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
    marginTop:20,
    paddingTop:15,
    paddingBottom:20,
    marginLeft:30,
    marginRight:30,
    alignItems: 'center',
    justifyContent: 'center',
    left: '20%',
    borderWidth: 2,
    top: 70,
    width: 170,
    height: 170,
    backgroundColor: '#0A547B',
    borderRadius: 100,
  },
});
