import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import App from './src/components/App.js';

export default class ShopDemo extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ShopDemo', () => ShopDemo);
