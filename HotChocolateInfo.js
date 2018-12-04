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

export default class HotChocolateInfo extends Component {

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
    let defMilk = this.state.product.milks[0];
    let defSize = this.state.product.sizes[0];
    let defextraflavor = this.state.product.extraflavors[0];
    this.setState({
      selectedColor: defColor,
      selectedSize: defSize,
      selectedMilk: defMilk,
      selectedextraflavor: defextraflavor,
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
        <Button onPress={() => this.props.navigation.navigate('CartScreen')} transparent>.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right}  style={{ fontSize: 25, color: 'white'}}/>
        <Content>
            <Image source={require('./Hot Drinks/HotChocolate.jpg')} style={styles.image} />
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
            <Grid style={{marginTop: 15}}>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Extra Flavors?:</Text>
                </View>
              </Col>
              <Col size={3}>
            <Picker
                  mode="dropdown"
                  placeholder="Extra flavor"
                  note={true}
                  style={{ height: 50, width: 200 }}
                  selectedValue={this.state.selectedextraflavor}
                  onValueChange={(extraflavor) => this.setState({selectedextraflavor: extraflavor})}>
                  {this.renderFlavor()}
                </Picker>
              </Col>
            </Grid> 



 <Grid style={{marginTop: 15}}>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Milk:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Select a milk"
                  note={true}
                  style={{ height: 50, width: 200 }}
                  selectedValue={this.state.selectedMilk}
                  onValueChange={(milk) => this.setState({selectedMilk: milk})}>
                  {this.renderMilk()}
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

renderMilk() {
    let milks = [];
    this.state.product.milks.map((milk, i) => {
      milks.push(
        <Item key={i} label={milk} value={milk} />
      );
    });
    return milks;
  }

  renderFlavor() {
    let extraflavors = [];
    this.state.product.extraflavors.map((extraflavor, i) => {
      extraflavors.push(
        <Item key={i} label={extraflavor} value={extraflavor} />
      );
    });
    return extraflavors;
    }

  addToCart() {
    var product = this.state.product;
    var price = this.price();
   product['color'] = this.state.selectedColor;
    product['size'] = this.state.selectedSize;
    product['milk'] = this.state.selectedMilk;
    product['quantity'] = this.state.quantity;
    product['price'] = price;
    product['extraflavors'] = this.state.selectedextraflavor;
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
  var num =0;
 if (this.state.selectedextraflavor == 'Yes'){
        num = 1
    }
    var xFlavor = num * .75
  var extras = xFlavor
  if (this.state.selectedColor != 'None'){
      if (this.state.selectedSize == 'Short - 8 oz'){
        value = this.state.quantity * (2.90 + extras);
      }
      if (this.state.selectedSize == 'Small - 12 oz'){
        value = this.state.quantity * (3.55 + extras);
      }
      if (this.state.selectedSize == 'Medium - 16 oz'){
        value = this.state.quantity * (3.90 + extras);
      }
      if (this.state.selectedSize == 'Large - 24 oz'){
      value = this.state.quantity * (4.30 + extras);
      }
   }
   if (this.state.selectedColor == 'None')  {
     if (this.state.selectedSize == 'Short - 8 oz'){
        value = this.state.quantity * (2.15 + extras);
    }
    if (this.state.selectedSize == 'Small - 12 oz'){
        value = this.state.quantity * (2.80 + extras);
    }
    if (this.state.selectedSize == 'Medium - 16 oz'){
        value = this.state.quantity * (3.15 + extras);
    }
    if (this.state.selectedSize == 'Large - 24 oz'){
      value = this.state.quantity * (3.55 + extras);
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
  title: 'Hot Chocolate',
  colors:['None', 'Vanilla', 'Carmel', 'Hazelnut', 'Chocolate', 'Sugar-Free Vanilla'],
  milks: ['Hot Water', 'Whole', 'Low-Fat', 'Non-Fat', 'Almond', 'Soy'],
  xEspresso: 'empty',
  sizes: ['Short - 8 oz', 'Small - 12 oz', 'Medium - 16 oz', 'Large - 24 oz'],
   extraflavors: ['No', 'Yes']
};
