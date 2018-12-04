import React, { Component } from 'react';
import { TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Content, View, Grid, Col, Left, Right, Button, Icon, List, ListItem, Body, Radio, Input, Item } from 'native-base';
import FAIcon  from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from './Colors';
import Text from './Text';
import Navbar from './Navbar';

export default class Checkout extends Component {
   static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

  constructor(props) {
      super(props);
      this.state = {
        cartItems: [],
        total: 0,
        card: true,
        paypal: false,
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        postcode: '',
        note: '',
      };
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('CartScreen')} transparent>
          <Icon name="ios-arrow-back" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );

    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} title="CHECKOUT" />
        <Content padder>
          <View>
            <Text style={{marginTop: 15, fontSize: 18}}>Pick Up Information</Text>
            <Item regular style={{marginTop: 7}}>
                <Input placeholder='Name' onChangeText={(text) => this.setState({name: text})} placeholderTextColor="#687373" />
            </Item>
  </View>
          <Text style={{marginTop: 15, fontSize: 18}}>Your order</Text>
          <View style={styles.invoice}>
            <List>
                {this.renderItems()}
            </List>
            <View style={styles.line} />
            <Grid style={{paddingLeft: 10, paddingRight: 10, marginTop: 7}}>
              <Col>
                <Text style={{fontSize: 18, fontStyle: 'italic'}}>Total</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'right', fontSize: 18, fontWeight: 'bold'}}>$</Text>
              </Col>
            </Grid>
          </View>
          <View>
            <Text style={{marginTop: 15, marginBottom: 7, fontSize: 18}}>Payement method</Text>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0}}>
              <Text>Pay with card</Text>
              <FAIcon name="cc-mastercard" size={20} color="#c0392b" style={{marginLeft: 7}} />
              <FAIcon name="cc-visa" size={20} color="#2980b9" style={{marginLeft: 2}} />
              <Right>
                <Radio selected={this.state.card} onPress={() => this.setState({card: true, paypal: false})} />
              </Right>
            </ListItem>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0, borderTopWidth: 0}}>
              <Text>Pay with Paypal</Text>
              <FAIcon name="cc-paypal" size={20} color="#34495e" style={{marginLeft: 7}} />
              <Right>
                <Radio selected={this.state.paypal} onPress={() => this.setState({card: false, paypal: true})} />
              </Right>
            </ListItem>
          </View>
          <View style={{marginTop: 10, marginBottom: 10, paddingBottom: 7}}>
            <Button onPress={() => this.checkout()} style={{backgroundColor: Colors.navbarBackgroundColor}} block iconLeft>
              <Icon name='ios-card' />
              <Text style={{color: '#fdfdfd'}}>Proceed to payement</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  renderItems() {
    let items = [];
    this.state.cartItems.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          style={{marginLeft: 0}}
        >
          <Body style={{paddingLeft: 10}}>
            <Text style={{fontSize: 18}}>
              {item.quantity > 1 ? item.quantity+"x " : null}
              {item.title}
            </Text>
            <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Flavor: {item.color}</Text>
            <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>Size: {item.size}</Text>
          </Body>
          <Right>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.price}</Text>
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  checkout() {
    console.log(this.state);
    alert("Check the log");
  }
}

const styles = {
  invoice: {
    paddingLeft: 20,
    paddingRight: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bdc3c7'
  }
}
