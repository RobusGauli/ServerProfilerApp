import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native'
import {
    Header,
    MenuItem,
    MItem
} from '../components'
import {
    nodes
} from '../api'

import { NavigationActions } from 'react-navigation'

export class Menu extends React.Component {

    constructor() {
        super()
        this.state = {
            error: false,
            connected: false,
            data: [],
            loading: false,
            refreshing: false
            
        }

        
    }

    onPress = (aliasName) => {

        const navigateAction = NavigationActions.navigate({
            routeName: 'NodeTab',
            params: {
                aliasName: aliasName
            }
        })
        this.props.navigation.dispatch(navigateAction)

    }

    componentDidMount = () => {
        this.makeNetworkCall()
        
    }

    makeNetworkCall = () => {
        this.setState({
            loading: true,
            refreshing: true
        })
        nodes()
        .then(json => {
            
            this.setState({
                data: json.nodes,
                loading: false,
                refreshing: false
            })
        })
        .catch(e => {
            this.setState({
                loading: false,
                error: true,
                refreshing: false
            })
        })
    }

    

   

    render() {
        let menuView = this.state.data.map((item, index) => {
            return (
                <MItem title={item.name}
                    platform={item.cpu}
                    key={index}

                    onPress={() => this.onPress(item.name)}
                />
            )
        })
        return (
            <View style={styles.container}>
                <Header leftData={''}
                    rightData={''}
                    mid={'SERVERS'}
                />
                
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.makeNetworkCall}
                        />
                    }
                >
                    {menuView}
                    
                    
                    
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        color: 'white'
    }
})