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

export class Network extends React.Component {

    constructor() {
        super()
        this.byteReceived = 0
        this.byteSent = 0
        this.packetReceived = 0
        this.packetSent = 0
        
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
    


   

  

    render() {
        
        
        if(this.props.screenProps.data !== null) {
            //cu = this.props.screenProps.data[this.aliasName].cpu.cu
            let data = this.props.screenProps.data
            
            if (data.id === this.aliasName) {
               
                this.byteReceived = data.payload.network.br
                this.byteSent = data.payload.network.bs
                this.packetReceived = data.payload.network.pr
                this.packetSent = data.payload.network.ps

                
                
                
                
            }
            
        
        }
        
       
        return (
            <View style={styles.container}>
                <Header leftData={``}
                    rightData={this.state.cpuMeta.os_name}
                    mid={'Network'}
                />
                
                <ScrollView>
                    <MenuItem title={'Byte Recieved'}
                        value={this.byteReceived}
                        
                        main
                        heading
                        
                        
                    />
                    
                    <View>
                        <MenuItem title={'Byte Sent'}
                                value={this.byteSent}
                                main
                                heading
                        />
                        <MenuItem title={'Packets Received'}
                                value={this.packetReceived}
                                heading
                                main
                            />
                        <MenuItem title={'packets Sent'}
                            value={this.packetSent}
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