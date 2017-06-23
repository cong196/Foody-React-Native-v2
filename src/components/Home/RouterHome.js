import React, { Component } from 'react';
import {
    View, Text, Button, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import MainViewTabAnGi from './TabAnGi/MainViewTabAnGi';
import MainViewTabODau from './TabOdau/MainViewTabODau';



export const TabOdau_Angi = TabNavigator(
    {
        Tab_ODau: {
            screen: MainViewTabODau
        },
        Tab_AnGi: {
            screen: MainViewTabAnGi
        }
    },
    {
        
        scrollEnabled: true,
        tabBarPosition: 'bottom',
    }
);

export const TABZ = StackNavigator({
    TABZ1: {
        screen: MainViewTabAnGi,
        navigationOptions: {
            title: 'Tab ăn gì',
            header: null
        }
    }
})