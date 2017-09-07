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

        this.processViews = null
        this.state = {
            error: false,
            connected: false,
            data: [],
            
        }

        

        
        
    }

    onPress = (aliasName, pid) => {
        alert(pid)
    }

    componentWillMount = () => {
        const { screenProps } = this.props
        this.aliasName = screenProps.aliasName
        
        
    }

    componentDidMount = () => {
        //this.fetchFromSocket()
        
        
        
        
    }

    fetchFromSocket = () => {
        
    }

   

    render() {

        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = this.props.screenProps.data
            
            if (data.id === this.aliasName) {
                this.processViews = data.payload.processes.map((item, index) => {
                    return (
                        <ProcessItem name={item.name}
                        key={index}
                        pid={item.pid}
                        status={item.status}
                        cpuPercent={item.cpu_percent}
                        memoryPercent={item.memory_percent}
                        userName={item.username}
                        onPress={() => this.onPress(this.aliasName, item.pid)}
    
                    />
                    )
                })
                
            }
            
        
        }
        
       
        return (
            <View style={styles.container}>
                <Header leftData={''}
                    rightData={''}
                    mid={'Processes'}
                />
                
                <ScrollView>
                    
                    {this.processViews}
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