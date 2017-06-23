import React, { Component } from 'react';
import {
    View, Text, StyleSheet,Image
} from 'react-native';

export default class ItemMenu extends Component {
    render() {
        var { container,icon } = style;
        return (
            <View style={container}>
                <Image 
                    style = {icon}
                    source = {this.props.img}
                />
                <Text>{this.props.ten}</Text>
            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingLeft:10,
        paddingRight:8,
        borderBottomWidth:1/2,
        borderBottomColor:'#cccccc'
    },
    icon:{
    
        width:20,
        height:20,
        marginRight:10
    }
})