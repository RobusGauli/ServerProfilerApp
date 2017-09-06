import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    Header,
    MenuItem
} from '../components'

export class Memory extends React.Component {

    constructor() {
        super()
        this.state = {
            error: false,
            connected: false,
            data: {},
            
        }

        
    }

    componentDidMount = () => {
        this.fetchFromSocket()
    }

    fetchFromSocket = () => {
       
        //alert(this.cpuMeta.CLOSED)
    }

   

    render() {
        return (
            <View style={styles.container}>
                <Header leftData={''}
                    rightData={''}
                    mid={'Memory'}
                />
                
                <ScrollView>
                    <MenuItem title={'TOTAL '}
                        value={this.state.data.total}
                        
                        main
                        heading
                         
                        
                    />
                    <MenuItem title={'AVAILABLE '}
                        value={this.state.data.available}
                        
                        main
                        heading
                         
                        
                    />
                    <MenuItem title={'% USAGE'}
                        value={this.state.data.use_percentage}
                        main
                        heading
                        
                    />
                    <MenuItem title={'HEALTH'}
                        value={this.state.data.health}
                    />
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