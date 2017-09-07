import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export const ProcessItem = props => {
    let opacity = 0.09
    
    return (
        <TouchableOpacity style={{
            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
            height: props.main? 60: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 20,
            paddingLeft: 20,
            borderBottomWidth: 0.3,
            borderColor: 'rgba(255, 255, 255, 0.6)'
          }}
          onPress={props.onPress} 
        >
            <View style={{
                flexDirection: 'column'
            }}>
              <Text style={{
                color: 'white',
                fontSize: props.main? 16: 16,
                fontWeight: props.main? '300': 'bold'
              }}>
                {props.name}
              </Text>
              <View style={{
                  flexDirection: 'row',
                  marginTop: 3
              }}>
              <Text style={{
                color: 'white',
                fontSize: props.main? 14: 13,
                fontWeight: props.main? '300': '300'
              }}>
                {`PID: ${props.pid}, `}
              </Text>

              <Text style={{
                color: 'white',
                fontSize: props.main? 14: 13,
                fontWeight: props.main? '300': '300'
              }}>
                {`Status: ${props.status}`}
              </Text>
            </View>
            <Text style={{
                color: 'white',
                fontSize: props.main? 14: 13,
                fontWeight: props.main? '300': '300'
              }}>
                {props.userName}
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
                fontSize: props.main? 23: 10,
                color: 'white',
                fontWeight: props.main? '300': '300'
              }}>
                {'Memory'}
              </Text>
              <Text style={{
                fontSize: props.main? 23: 10,
                color: 'white',
                fontWeight: props.main? '300': '300'
              }}>
                {Math.round(props.memoryPercent * 10000)/10000}
              </Text>
              <View style={{marginTop: 8}}/>
              <Text style={{
                fontSize: props.main? 23: 10,
                color: 'white',
                fontWeight: props.main? '300': '300'
              }}>
                {'CPU'}
              </Text>
              <Text style={{
                fontSize: props.main? 23: 10,
                color: 'white',
                fontWeight: props.main? '300': '300'
              }}>
                {props.cpuPercent}
              </Text>
            </View>
          </TouchableOpacity>
    )
}

const defaultProps = {
    title: 'Kathmandu',
    time: 'Today, +10:45',
    newTime: '9:32',
    value: 'value',
    pid: 100,
    name: 'process nae',
    status: 'running',
    memoryPercent: '40%',
    cpuPercent: '50%',
    onPress: () => null
  }
ProcessItem.defaultProps = defaultProps
  