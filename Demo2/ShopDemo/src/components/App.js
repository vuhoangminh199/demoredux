import React, { Component } from 'react';

import {
    StatusBar,
    Navigator,
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

global.__DEV__ = false;

console.ignoredYellowBox = ['Remote debugger'];
StatusBar.setHidden(true);

export default class App extends Component {

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN':
                        return <Main navigator={navigator} />;
                        case 'AUTHENTICATION':
                        return <Authentication navigator={navigator} />;
                        case 'ORDERHISTORY':
                        return <OrderHistory navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}

                configureScen={route => {
                    if (route.name === 'AUTHENTICATION') {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
