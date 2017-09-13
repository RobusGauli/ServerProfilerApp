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
import {
    VictoryAnimation,
    VictoryLabel,
    VictoryStack,
    VictoryArea
} from 'victory-native'


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

            points: []
            
            
        }
        this.aliasName = null;
        this.data = {
            count: 0,
            dataPoints: []
        }
        this.points = []
        
        this.ps = []
        for (let i=1; i<= 50; i++) {
            this.ps.push(0)
        }
        this.count = 1
      
       
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

    updateDataPoints = (c) => {
        // if (this.data.count <= 30) {
        //     this.data.dataPoints.push(
        //         {
        //             x: this.data.count + 1,
        //             y: c
        //         }
        //     )
        //     this.data.count = this.data.count + 1
        // } else {
        //     this.points = this.data.dataPoints
        //     this.data.count = 0
        //     this.data.dataPoints = []
        // }
    }

    update = (c) => {
        // if(this.count % 100 != 0) {

        //     this.ps.push(
        //         {
        //             x: this.count % 100,
        //             y: c
        //         }
        //     )

            
        //    // console.log(this.ps)
        // } else {
        //     this.ps = []
        //     //console.log(this.ps, this.count)
            
            
        // }
        // this.count++


        this.ps.push(c)
        this.ps.shift()
        this.points = this.ps.map((item, index) => {return {x: index, y: item}})
        

    }

    render() {
        
       

        
        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = this.props.screenProps.data
            let newPoints = []
            
            this.cu = data.payload.cpu.cu
            let c = parseFloat(this.cu)
            //this.updateDataPoints(c)
            this.update(c)
            newPoints = [
                {x: 1, y: c}, {x: 2, y: 100.0-c}
            ]
            this.cpuc = data.payload.cpu.cupc.map((item, index) => {
               
                
                return (
                    <MenuItem title={`Core ${index + 1}`}
                        value={item}
                        key={index}
                        percent
                    />
                )
            })
            //console.log(newPoints)

            this.state.points = newPoints

            this.cpuInts = data.payload.cpu.ci
            this.ctxSwitch = data.payload.cpu.cs
            this.sysCalls = data.payload.cpu.sc
            
            
            
            
            
                
                
            
            
        
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
                    
                    {/* <VictoryPie
                        animate={{duration: 1000}}
                        width={400} height={400}
                        data={this.state.points}
                        innerRadius={120}
                        cornerRadius={25}
                        labels={() => null}
                        style={{
                        data: { fill: (d) => {
                            const color = d.y > 30 ? "red" : "green";
                            return d.x === 1 ? color : "transparent";
                        }
                        }
                        }}
                  />
                   */}
                    
                    <VictoryStack
                        colorScale={"blue"}
                    >
                        
                            <VictoryArea
                                key={1}
                                data={this.points}
                                interpolation={"basis"}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 1000 }
                                }}
                            />

                            
                    </VictoryStack>
                            
                    
                   
                    
                
                    
                    
                
                
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