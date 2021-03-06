import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Svg, {
  Circle,
  Line
} from 'react-native-svg'

import Icon from 'react-native-vector-icons/Ionicons'

export const MItem = props => {
    
    return (
      <TouchableHighlight
        underlayColor={'rgba(255, 255, 255, 0.1)'}
        activeOpacity= {0.6}
        style={{flex: 1, justifyContent:'space-around'}}
        bottomBorderWidth={1}
        borderColor={'rgba(255, 255, 255, 0.6)'}
        onPress={props.onPress}
        
      >
      <View
        style={{
          borderBottomColor:'rgba(255, 255, 255, 0.4)',
          borderBottomWidth:0.3
        }}
        
      >
        <View style={{
          backgroundColor: `rgba(255, 255, 255, 0.01)`,
          
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          paddingRight: 20,
          paddingLeft: 20,
          
          marginLeft: 10,
          height: 70,
          borderColor: 'rgba(255, 255, 255, 0.9)',
          flex: 1
        }}>
          <View style={{
            justifyContent: 'center'
          }}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18
            }}>
              {props.title}
            </Text>
            <Text style={{
              color: 'white',
              fontSize: 11
            }}>
              {props.platform}
            </Text>
          </View>
          <Icon name={'ios-speedometer-outline'} size={30} color={'rgba(255,255, 255, 0.8)'} style={{marginRight: 20}}/>
        </View>
        
        
      </View>
      </TouchableHighlight>
    )
  }

  const defaultProps = {
    title: 'Kathmandu',
    time: 'Today, +10:45',
    newTime: '9:32',
    platform: 'Unknown platform',
    cpu: '0',
    memory: '0',
    br: 0,
    bs: 0,
    onPress: () => null
  }
  MItem.defaultProps = defaultProps
  