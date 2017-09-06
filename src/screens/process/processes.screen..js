import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    Header,
    MenuItem,
    ProcessItem
} from '../components'

export class Processes extends React.Component {

    constructor() {
        super()
        this.state = {
            error: false,
            connected: false,
            data: [],
            
        }

        

        
        
    }

    

    componentDidMount = () => {
        //this.fetchFromSocket()
        
        
        
        
    }

    fetchFromSocket = () => {
        
    }

   

    render() {
        
        let views = this.state.data.map((item, index) => {
            return (
                <ProcessItem name={item.name}
                    key={index}
                    pid={item.pid}
                    status={item.status}
                    cpuPercent={item.cpu_percent}
                    memoryPercent={item.memory_percent}
                    userName={item.username}

                />
            )
        })
        return (
            <View style={styles.container}>
                <Header leftData={''}
                    rightData={''}
                    mid={'Processes'}
                />
                
                <ScrollView>
                    
                    {views}
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