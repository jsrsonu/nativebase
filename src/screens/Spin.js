import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';


export default class Spin extends Component{
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);
    }
    componentDidMount(){
        //alert(`Height ${height} and width ${width}`);
        this.spin();
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.quad
          }
        ).start(() => this.spin())
      }
    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
         });
        return(
            <View style={styles.viewContainor}>
            <Animated.Image
                style={{
                width: 227,
                height: 200,
                transform: [{rotate: spin}] }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
            />
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    viewContainor : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor : '#D0E5F2'
    }
});