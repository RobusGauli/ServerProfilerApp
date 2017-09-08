import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'


export const MenuItem = props => {
    let value = props.percent ? props.value + '%' : props.value
    let opacity = props.main ? 0.06 : 0.04
    return (
      <View style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        height: props.main? 60: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        borderBottomWidth: 0.3,
        borderColor: 'rgba(255, 255, 255, 0.6)'
      }}>
        <View>
          <Text style={{
            color: 'white',
            fontSize: props.main? 20: 17,
            fontWeight: props.main? '300': '300'
          }}>
            {props.title}
          </Text>
        </View>
        <View style={{
          backgroundColor: props.colored? parseFloat(props.value) >=60.0 ? 'rgba(229,57,53 ,0.8)': 'rgba(34, 229, 45, 0.8)': null,
          paddingLeft: props.main? 10: 5, 
          paddingRight: props.main? 10: 5,
          paddingTop:2, 
          paddingBottom: 2,
          borderRadius: 10,
          width: props.heading ? null: 90,
          alignItems: 'flex-end',
          
          
        }}>
          <Text style={{
            fontSize: props.main? 23: 19,
            color: 'white',
            fontWeight: props.main? '300': '300'
          }}>
            {value}
          </Text>
        </View>
      </View>
    )
  }
  
  const defaultProps = {
    title: 'Kathmandu',
    time: 'Today, +10:45',
    newTime: '9:32'
  }
  MenuItem.defaultProps = defaultProps
  