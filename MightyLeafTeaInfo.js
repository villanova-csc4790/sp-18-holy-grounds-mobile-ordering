import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage, StyleSheet, Animated,} from 'react-native';
import { View, Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Our custom files and classes import
import Colors from './Colors';
import Text from './Text';
import Navbar from './Navbar';
import {default as ProductComponent} from './Product';

export default class MightyLeafTeaInfo extends Component {

  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    this.setState({product: dummyProduct});
  }

  componentDidMount() {
    /* Select the default color and size (first ones) */
    let defSize = this.state.product.sizes[0];
    this.setState({
      selectedSize: defSize,
    });
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('HotMenuScreen')} transparent>
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
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right} style={{ fontSize: 25, color: 'white'}}/>
        <Content>
            <Image source={require('./Hot Drinks/MightyLeafTea.jpg')} style={styles.image} />
          <View style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}>
            <Grid>
              <Col>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>${this.price()}</Text>: null}
              </Col>
            </Grid>
            <Grid style={{marginTop: 15}}>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Size:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Select a size"
                  note={true}
                  selectedValue={this.state.selectedSize}
                  onValueChange={(size) => this.setState({selectedSize: size})}
                >
                  {this.renderSize()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Quantity:</Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Button style={{flex: 1}} icon light onPress={() => this.setState({quantity: this.state.quantity>1 ? this.state.quantity-1 : 1})} >
                    <Icon name='ios-remove-outline' />
                  </Button>
                  <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 15}}>
                    <Text style={{fontSize: 18}}>{this.state.quantity}</Text>
                  </View>
                  <Button style={{flex: 1}} icon light onPress={() => this.setState({quantity: this.state.quantity+1})}>
                    <Icon name='ios-add' />
                  </Button>
                </View>
              </Col>
            </Grid>
            <Grid style={{marginTop: 15}}>
              <Col size={3}>
                <Button block onPress={this.addToCart.bind(this)} style={{backgroundColor: Colors.navbarBackgroundColor}}>
                  <Text style={{color: "#fdfdfd", marginLeft: 5}}>Add to cart</Text>
                </Button>
              </Col>
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }

  renderImages() {
    let images = [];
    this.state.product.images.map((img, i) => {
      images.push(
          <TouchableWithoutFeedback
            key={i}
            onPress={() => this.openGallery(i)}
          >
            <Image
              source={{uri: img}}
              style={{width: Dimensions.get('window').width, height: 350}}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
      );
    });
    return images;
  }


  renderSize() {
    let size = [];
    this.state.product.sizes.map((s, i) => {
      size.push(
        <Item key={i} label={s} value={s} />
      );
    });
    return size;
  }


  addToCart() {
    var product = this.state.product;
    var price = this.price();
    product['price'] = price;
    product['size'] = this.state.selectedSize;
    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if(!res) AsyncStorage.setItem("CART",JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        items.push(product);
        AsyncStorage.setItem("CART",JSON.stringify(items));
      }
    });
    
  }

  price() {
    var value = this.state.quantity * 1.30;
    value = value.toFixed(2);
    return value;
  }
}
const styles = StyleSheet.create({
image: {
  alignItems: 'center',
  height: 300,
  width: 300,
  marginTop: 40,
  marginBottom: 20,
  marginLeft: 40
  },
});
const dummyProduct = {
  id: 2,
  title: 'Mighty Leaf Tea',
  color: 'empty',
  xEspresso: 'empty',
  xFlavor: 'empty',
  milk: 'empty',
  sizes: ['Short - 8 oz', 'Small - 12 oz', 'Medium - 16 oz', 'Large - 24 oz'],
};
