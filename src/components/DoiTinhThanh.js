import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';


export default class DoiTinhThanh extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View>
                <Text>Đổi tình thành component</Text>
                <TouchableOpacity
                    onPress={() => { this.goBack() }}
                >
                    <Text>BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}