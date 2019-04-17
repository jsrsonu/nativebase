import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

class WebArea extends Component {
    webview = null;
    constructor(props) {
        super(props)

        this.state = {
            canGoBack: false
        }
    } 
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {
       if (this.state.canGoBack) {
          this.webview.goBack();
        }   
      return true;
    }
  
    render() {
      return (
        <WebView
          ref={ref => (this.webview = ref)}
          source={{uri: 'https://facebook.github.io/react-native/'}}
          onNavigationStateChange={this.handleWebViewNavigationStateChange.bind(this)}

          //ref={(myWeb) => this.refWeb = myWeb}
          //onNavigationStateChange={this.onNavigationStateChange.bind(this)}               
            
        />
      );
    }
  
    handleWebViewNavigationStateChange = newNavState => {
      // newNavState looks something like this:
      // {
      //   url?: string;
      //   title?: string;
      //   loading?: boolean;
      //   canGoBack?: boolean;
      //   canGoForward?: boolean;
      // }
      const { url, canGoBack } = newNavState;
      if (!url) return
  
      // handle certain doctypes
      if (url.includes('.pdf')) {
        this.webview.stopLoading();
        // open a modal with the PDF viewer
      }

      if(canGoBack){
        this.setState({
            canGoBack
         });
      }

      // one way to handle a successful form submit is via query strings
      if (url.includes('?message=success')) {
        this.webview.stopLoading();
        // maybe close this view?
      }
  
      // one way to handle errors is via query string
      if (url.includes('?errors=true')) {
        this.webview.stopLoading();
      }
  
      // redirect somewhere else
      if (url.includes('google.com')) {
        const newURL = 'https://facebook.github.io/react-native/';
        const redirectTo = 'window.location = "' + newURL + '"';
        this.webview.injectJavaScript(redirectTo);
      }
    }
  }

export default WebArea;
