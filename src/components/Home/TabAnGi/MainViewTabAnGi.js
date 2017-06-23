import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class MainViewTabAnGi extends Component {

    doitinh() {
        const { doitinh } = this.props;
        doitinh();
    }


    render() {
        var { container, bar } = style;
        return (
            <View style={container}>
                <View style={bar}>
                    <View>
                        <Text>Mới nhất</Text>
                    </View>
                    <View>
                        <Text>Danh mục</Text>
                    </View>

                    <View>
                        <Text>TPHCM</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { this.doitinh() }}
                >
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee'
    },
    bar: {

    }
})