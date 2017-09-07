import {
    AppRegistry 
  } from 'react-native'
  import React from 'react'
  import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation
  } from 'react-native'
  import { TabNavigator, StackNavigator } from 'react-navigation'
  import { CPU } from './screens/cpu'
  import { Memory } from './screens/memory'
  import { Processes } from './screens/process'
  import { Menu } from './screens/menu'
  
  
  const options = {
    tabBarOptions: {
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.95)'
      },
      labelStyle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 15,
      },
  
      activeTintColor: 'orange',
      activeColor: 'orange',
      activeStyle: {
        color: 'orange'
      },
      tabStyle: {
        color: 'orange'
      },
  
      indicatorStyle: {
        height: 100,
        backgroundColor: 'white'
      }
    }
  }
  const Profiler = TabNavigator({
      Cpu: {
        screen: CPU,
        navigationOptions: {
          header: null
        }
      },
      Memory: {
        screen: Memory,
        navigationOptions: {
          header: null
        }
      },
      Process: {
        screen: Processes,
        navigationOptions: {
          header: null
        }
      }
    }, options
  )

class Root extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      connected: false,
      error: false,
      loading: false,
      fetched: false  
    }

    this.ws = new WebSocket('ws://192.168.0.104:9000/')
    
    



  }
  componentWillMount = () => {
    this.aliasName = this.props.navigation.state.params.aliasName
  }
  componentDidMount = () => {
    this.fetchFromSocket()

   
    
  }

  componentWillUnmount = () => {
    this.ws.close()
  }

  fetchFromSocket = () => {
    
    this.ws.onmessage = e => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
      this.setState({
        data: e.data,
        fetched: true

      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Profiler screenProps={{data: JSON.parse(this.state.data), aliasName: this.aliasName}} />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


const rootNav = StackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
  NodeTab: {
    screen: Root,
    navigationOptions: {
      header: null
    }
  },
});

AppRegistry.registerComponent('Mockup', () => rootNav)