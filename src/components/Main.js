import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image
} from 'react-native';

import MainHome from './Home/MainHome';
import BoSuuTap from './BoSuuTap/BoSuuTap';
import TabNavigator from 'react-native-tab-navigator';
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }
    doiTinh() {
        const { navigator } = this.props;
        navigator.push({ name: 'doitinh' });
    }
    render() {
        const { icon } = style;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    titleStyle = {opacity = 0}
                    renderIcon={() => <Image style = { icon } source={require('../img/home.png')} />}
                    renderSelectedIcon={() => <Image style = { icon } source={require('../img/home_active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <MainHome doitinh = {this.doiTinh.bind(this)}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    titleStyle = {opacity = 0}
                    selected={this.state.selectedTab === 'collection'}
                    renderIcon={() => <Image style = { icon } source={require('../img/collection.png')} />}
                    renderSelectedIcon={() => <Image style = { icon } source={require('../img/collection_active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'collection' })}>
                    <BoSuuTap />
                </TabNavigator.Item>

                <TabNavigator.Item
                    titleStyle = {opacity = 0}
                    selected={this.state.selectedTab === 'search'}
                    renderIcon={() => <Image style = { icon } source={require('../img/search.png')} />}
                    renderSelectedIcon={() => <Image style = { icon } source={require('../img/search_active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'search' })}>
                    <BoSuuTap />
                </TabNavigator.Item>


                <TabNavigator.Item
                    titleStyle = {opacity = 0}
                    selected={this.state.selectedTab === 'notification'}
                    renderIcon={() => <Image style = { icon } source={require('../img/notification.png')} />}
                    renderSelectedIcon={() => <Image style = { icon } source={require('../img/notificatio_activen.png')} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    <BoSuuTap />
                </TabNavigator.Item>

                <TabNavigator.Item
                    titleStyle = {opacity = 0}
                    selected={this.state.selectedTab === 'profile'}
                    renderIcon={() => <Image style = { icon } source={require('../img/profile.png')} />}
                    renderSelectedIcon={() => <Image style = { icon } source={require('../img/profile_active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <BoSuuTap />
                </TabNavigator.Item>


            </TabNavigator >
        );
    }
}

var style = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }
})
