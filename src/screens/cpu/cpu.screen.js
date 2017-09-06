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

export class CPU extends React.Component {

    constructor() {
        super()
        this.state = {
            error: false,
            connected: false,
            data: {},
            cpuMeta: {}
        }
        this.aliasName = null;

       
    }
    componentWillMount = () => {
        const { screenProps } = this.props
        this.aliasName = screenProps.aliasName
        
        
    }
    componentDidMount = () => {
        console.log(this.props, 'from therer')
    }


    renderCpuUsagePerCore = () => {
        if (Object.keys(this.state.data).length === 0) {
            return null

        }

        return this.state.data.c_utilization_per_core.map((item, index) => {
            return (
                <MenuItem
                    title={`Core ${index + 1}`}
                    value={item}
                    key={index}
                    percent
                />
            )
        })
    }

    renderCpuInterrupts = () => {
        if (Object.keys(this.state.data).length === 0) {
            return null

        }
        return (
            <View>
               <MenuItem title={'CPU INTS'}
                    value={this.state.data.cpu_interrupts}
                    main
                    heading
               />
               <MenuItem title={'CTX SWITCH'}
                    value={this.state.data.ctx_switches}
                    heading
                    main
                />
                <MenuItem title={'SYS CALLS'}
                    value={this.state.data.sys_calls}
                    heading
                    main
                />
            </View>
        )  
    }

    render() {
        let cu = 0
        
        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = JSON.parse(this.props.screenProps.data)
            
            if (data.id === this.aliasName) {
                console.log(data.payload, data.id)
            }
            
        
        }
        
       
        return (
            <View style={styles.container}>
                <Header leftData={`cores: ${3}`}
                    rightData={this.state.cpuMeta.os_name}
                    mid={'CPU'}
                />
                
                <ScrollView>
                    <MenuItem title={'CPU USAGE'}
                        value={cu}
                        percent
                        main
                        heading
                        colored 
                        
                    />
                    {this.renderCpuUsagePerCore()}
                    {this.renderCpuInterrupts()}
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