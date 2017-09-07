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
import Svg, {
    Path,
    Polyline
} from 'react-native-svg'

export class CPU extends React.Component {

    constructor() {
        super()
        this.cu = 0
        this.cpuc = null
        this.cpuinterrupts = null
        
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
        
        
        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = this.props.screenProps.data
            
            if (data.id === this.aliasName) {
                this.cu = data.payload.cpu.cu
                
                this.cpuc = data.payload.cpu.cupc.map((item, index) => {
                    return (
                        <MenuItem title={`Core ${index + 1}`}
                            value={item}
                            key={index}
                            percent
                        />
                    )
                })

                this.cpuInts = data.payload.cpu.ci
                this.ctxSwitch = data.payload.cpu.cs
                this.sysCalls = data.payload.cpu.sc

                
                
                
                
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
                        value={this.cu}
                        percent
                        main
                        heading
                        colored 
                        
                    />
                    {this.cpuc}
                    <View>
                        <MenuItem title={'CPU INTS'}
                                value={this.cpuInts}
                                main
                                heading
                        />
                        <MenuItem title={'CTX SWITCH'}
                                value={this.ctxSwitch}
                                heading
                                main
                            />
                        <MenuItem title={'SYS CALLS'}
                            value={this.sysCalls}
                            heading
                            main
                        />
                    </View>
                    
                    
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