import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from "./screens/HomeScreen";
import {PatientScreen} from "./screens/PatientScreen";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Patient: {
        screen: PatientScreen,
    }
});


export default createAppContainer(AppNavigator)
