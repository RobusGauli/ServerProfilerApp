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

import { VictoryBar, VictoryPie, VictoryChart, VictoryLine, VictoryTheme } from 'victory-native'

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
            cpuMeta: {},
            dataPoints: []
            
        }
        this.aliasName = null;

        this.dataPoint = {
            x: 0,
            y: 0
        }
        this.dataPoints = []

       
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
                this.state.dataPoints.push(
                    {
                        x: this.dataPoint.x + 1,
                        y: Math.floor((parseFloat(this.cu) / 100) * 5)
                    }
                )
                this.dataPoint.x++

                
               
                
                
                
                
            
            
        
        }
        
       
        return (
            <ScrollView style={styles.container}>
                <Header leftData={`cores: ${3}`}
                    rightData={this.state.cpuMeta.os_name}
                    mid={'CPU'}
                />
                
                
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
                    
                        
                        <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
                            <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                            }}
                            data={this.state.dataPoints}
                        />
                        </VictoryChart>
                    
                    
                
                
            </ScrollView>
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