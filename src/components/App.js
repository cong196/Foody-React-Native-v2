import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import Main from './Main';
import DoiTinhThanh from './DoiTinhThanh';
import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class App extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'home':
                return <Main navigator={navigator} />

            case 'doitinh':
                return <DoiTinhThanh navigator={navigator}/>
        }
    }
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'home' }}
                renderScene={this.renderScene}
            />
        );
    }
}

/*
var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})


<Swiper
                style = {styles.wrapper}
                showsButtons = {false}
                loop = {false}
                dot = {<View style={{ backgroundColor: 'rgba(0,0,0,0)'}}/>}
                activeDot = {<View style={{ backgroundColor: 'rgba(0,0,0,0)'}}/>}
            >
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
*/