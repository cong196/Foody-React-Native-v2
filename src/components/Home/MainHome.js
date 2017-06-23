import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import HeaderHome from './HeaderHome'
import MainViewTabAnGi from './TabAnGi/MainViewTabAnGi';
import MainViewTabODau from './TabOdau/MainViewTabODau';
import BodyHome from './BodyHome';


export default class MainHome extends Component {
    render() {
        return (
            <View>
                <HeaderHome />
                <BodyHome doitinh = {this.props.doitinh}/>
            </View>
        );
    }
}

/*
<HeaderHome navigate={navigate} />
<TouchableOpacity
                    onPress={() => {navigate('DoiTinh')} }
                >
                    <Text>go Doi Tinh Thanh </Text>
                </TouchableOpacity>

*/