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
import {
    VictoryChart,
    VictoryZoomContainer,
    VictoryScatter,
    VictoryTheme,
    VictoryStack,
    VictoryArea,
    VictoryAnimation
} from 'victory-native'
import _ from 'lodash'

export class Memory extends React.Component {

    constructor() {
        super()
        this.total = 0
        this.available = 0
        this.usePercentage = 0
        this.health = 'Good'
        
        this.availables = []

        
    }

    componentWillMount = () => {
        const { screenProps } = this.props
        this.aliasName = screenProps.aliasName
    }
    componentDidMount = () => {
        
    }

    

   

    render() {
        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = this.props.screenProps.data
            
            
                this.total = data.payload.memory.t
                this.available = data.payload.memory.a
                this.usePercentage = data.payload.memory.p
                this.availables.push(parseInt(this.available))
                
         
            
        
        }
        
        return (
            <View style={styles.container}>
                <Header leftData={''}
                    rightData={''}
                    mid={'Memory'}
                />

                
                <ScrollView>
                    <MenuItem title={'TOTAL '}
                        value={this.total}
                        
                        main
                        heading
                         
                        
                    />
                    <MenuItem title={'AVAILABLE '}
                        value={this.available}
                        
                        main
                        heading
                         
                        
                    />
                    <MenuItem title={'% USAGE'}
                        value={this.usePercentage}
                        main
                        heading
                        
                    />
                    <MenuItem title={'HEALTH'}
                        value={this.health}
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