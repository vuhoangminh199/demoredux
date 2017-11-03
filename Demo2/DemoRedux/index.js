import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';

const store = createStore(reducer);

export default class DemoRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>

        );
    }
}
AppRegistry.registerComponent('DemoRedux', () => DemoRedux);
