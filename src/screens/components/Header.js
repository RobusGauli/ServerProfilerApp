import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,

} from 'react-native'

export const Header = props => {
    return (
      <View style={{
        height: 60,
        backgroundColor: 'rgba(0, 0, 0,  0.95)',
        borderBottomColor: 'rgba(255, 255, 255, 0.6)',
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20
      }}>
        <TouchableOpacity>
          <Text style={{
            color: 'orange',
            fontSize: 16
          }}>
            {`${props.leftData}`}
          </Text>
        </TouchableOpacity>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold'
          
        }}>
          {props.mid}
        </Text>
        {/* <Icon name={'md-notifications-outline'} size={29} color={'white'} /> */}
        <TouchableOpacity>
          <Text style={{
            color: 'white',
            fontSize: 17
            
          }}>
          {`${props.rightData}`}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  Header.defaultProps = {
    leftData: '',
    rightData: '',
    mid: ''
  }