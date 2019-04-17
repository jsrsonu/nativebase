import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableHighlight, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }        
    }
    componentDidMount(){
        //alert(`Height ${height} and width ${width}`);
    }
    render(){
        return(
            <View style={styles.viewContainor}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor="#70BCEC"
                />
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri:'https://png.icons8.com/message/ultraviolet/50/3498db'}} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                     />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        keyboardType="numeric"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                     />
                </View>
                <TouchableHighlight style={[styles.buttonContainer,styles.loginButton]} onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text>SignUp</Text>   
                </TouchableHighlight>
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