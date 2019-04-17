import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableHighlight, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class MapView extends Component{
    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
    }
      
    onRegionChange(region) {
        this.setState({ region });
    }
    
    render() {
        return (
            <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            />
        );
    }
}

const styles = StyleSheet.create({
    viewContainor : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor : '#D0E5F2'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:width-50,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:width-50,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    } 
});