import React from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, NavigatorIOS} from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

class LogIn extends React.Component {
  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: '',
      photoUrl: '',
    };
  }

  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        iosClientId:
          '675972671870-opvtfgk81a5f16omvn4gjljp6etg09tn.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        });
        this.props.navigation.navigate("LocationScreen")
      } else {
        console.log('cancelled');
      }
    }
     catch (e) {
      console.log('error', e);
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
                {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const LoginPage = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.jpeg')}
        style={styles.backgroundImage}>
        <Text style={styles.header1}> Holy Grounds </Text>
        <TouchableOpacity onPress={() => props.signIn()} style={styles.button}>
          <Text style={styles.paragraph}>Login </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const LoggedInPage = props => {
  return (
    <View>
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
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header1: {
    borderColor: 'white',
    borderWidth: 5,
    fontSize: 50,
    padding: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 150,
    fontFamily: 'Baskerville-Bold',
  },

  backgroundImage: {
    height: 800,
    width: 550,
  },
  paragraph: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Optima',
  },

  button: {
    position: 'absolute',
    alignItems: 'center',
    height: 35,
    width: 100,
    top: 250,
    left: 235,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  button2: {
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    width: 200,
    height: 200,
    backgroundColor: '#0A547B',
    borderRadius: 100,
  },
});
