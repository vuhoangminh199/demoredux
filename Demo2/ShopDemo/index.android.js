import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import App from '/Users/vuhoangminh/Desktop/Demo2/ShopDemo/src/components/App.js';

export default class ShopDemo extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ShopDemo', () => ShopDemo);

