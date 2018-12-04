import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage, StyleSheet } from 'react-native';
import { View, Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Our custom files and classes import
import Colors from './Colors';
import Text from './Text';
import Navbar from './Navbar';
import {default as ProductComponent} from './Product';

export default class JavivaInfo extends Component {

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
      xEspresso: 0,
      price: '',
      selectedColor: '',
      selectedSize: '',
      selectedMilk: '',
      selectedextraflavor: '',
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    this.setState({product: dummyProduct});
  }

  componentDidMount() {
    /* Select the default color and size (first ones) */
    let defColor = this.state.product.colors[0];
    let defSize = this.state.product.sizes[0];
    this.setState({
      selectedColor: defColor,
      selectedSize: defSize,
    });
  }
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('IcedMenuScreen')} transparent>
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
        <Navbar left={left} right={right} style={{fontSize: 18, color: 'white', marginLeft: 5}}/>
        <Content>
            <Image source={require('./Iced Drinks/Javiva.jpg')} style={styles.image} />
          <View style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}>
            <Grid>
              <Col>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>${this.price()}</Text>: null}
              </Col>
            </Grid>
            <Grid style={{marginTop: 15}}>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Flavor:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Select a flavor"
                  note={true}
                  style={{ height: 50, width: 200 }}
                  selectedValue={this.state.selectedColor}
                  onValueChange={(color) => this.setState({selectedColor: color})}>
                  {this.renderColors()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
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

  renderColors() {
    let colors = [];
    this.state.product.colors.map((color, i) => {
      colors.push(
        <Item key={i} label={color} value={color} />
      );
    });
    return colors;
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
    product['color'] = this.state.selectedColor;
    product['size'] = this.state.selectedSize;
    product['quantity'] = this.state.quantity;
    product['price'] = price;
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
    var value = 0;
    if (this.state.selectedColor != 'Coffee'){
      if (this.state.selectedSize == 'One Size - 16 oz'){
        value = this.state.quantity * (3.99);
      }
    }
    if (this.state.selectedColor == 'Mocha'){
      if (this.state.selectedSize == 'One Size - 16 oz'){
        value = this.state.quantity * (4.79);
      }
    }
     if (this.state.selectedColor == 'Chocolate and Caramel Swirl'){
      if (this.state.selectedSize == 'One Size - 16 oz'){
        value = this.state.quantity * (4.99);
      }
    }
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
  title: 'Javiva',
  colors:['Mocha', 'Coffee', 'Chocolate and Caramel Swirl',],
  sizes: ['One Size - 16 oz'],
  milk: 'empty',
  xEspresso: 'empty',
  xFlavor: 'empty',
};
