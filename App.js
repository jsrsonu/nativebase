
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import Listing from './src/screens/Listing';
import Users from './src/screens/ModalList';
import Spin from './src/screens/Spin';
import SignUp from './src/screens/SignUp';
import TabViewExample from './src/screens/TabView';
import WebArea from './src/screens/WebView';
import CollapseToolbar from './src/screens/CollapseToolbar';
import NetInfo from "@react-native-community/netinfo";

import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
/*import allReducers from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './src/components/counter';
const store = createStore(allReducers);*/

const StackNav = createDrawerNavigator(
  {
    CollapseToolbar : CollapseToolbar,
    SignUp : SignUp,
    Login : Login,
  },
  {
    initialRouteName: 'CollapseToolbar',
  }
);

const AppContainer = createAppContainer(StackNav);

export default class App extends Component{
  componentDidMount(){
  }
  render(){
    return(
       <AppContainer />
    );
  }
}


/*import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Body, Left, Right, Button, Footer, Title, FooterTab, Icon,
   Content, Accordion, DatePicker, Picker, Item, Form }  from 'native-base';
const datas = [ 
  { title: "First Element ", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), selected2: undefined };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }  
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  callMore(){
    alert('hiiii');
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu"></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search'></Icon>
            </Button>

            <Button transparent>
              <Icon name='heart'></Icon>
            </Button>

            <Button transparent onPress={() => this.callMore()}>
              <Icon name='more'></Icon>
            </Button>

          </Right> 
        </Header>
        <Content padder>
        <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>

          <Accordion dataArray={datas} expanded={0}
          icon="add"
          expandedIcon="remove"
          iconStyle={{ color: "green" }}
          expandedIconStyle={{ color: "red" }}
          headerStyle={{ backgroundColor: "#b7daf8" }}
          contentStyle={{ backgroundColor: "#ddecf8" }}
          />
           <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text style={{color:'#FFF'}}>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/