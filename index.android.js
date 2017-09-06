/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  StatusBar
} from 'react-native';
import { RTextInput } from './components'
import { RkTextInput } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height} = Dimensions.get('window')

export default class Mockup extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
    this._onPress = this._onPress.bind(this)
    

  }
  


  _onPress() {
    this.setState({
      username: 'hi there'
    })
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="#EC407A"
          barStyle="light-content"
        />
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-start',

        }}>
          <Icon name='ios-quote' size={70} color='white' />
          <Text style={{
            fontSize: 60,
            fontFamily: 'Quicksand-Medium',
            color: 'white',
            marginLeft: 10
          }}>
            OPENUS
          </Text>
        </View>
        <RTextInput style={{height: 100, fontSize: 35, color: 'white'}}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          autoFocus
          autoCorrect={false}
          selectionColor={'white'}
          defaultValue={this.state.username}
          underlineColorAndroid='white'
        />
        <View style={{
          
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <Text style={{
            fontFamily: 'Quicksand-Light',
            fontSize: 33,
            color: 'white'
          }}>
            Continue 
          </Text>
          
        </View>
                
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#455A64',
    paddingLeft: 25,
    paddingRight: 25
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

AppRegistry.registerComponent('Mockup', () => Mockup);
