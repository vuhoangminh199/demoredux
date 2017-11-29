import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component {
    componentDidMount() {
        getToken()
            .then(res => global.onSignIn(res))
            .catch(err => console.log(err));   
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDERHISTORY' });
    }

    closeControlPanel = () => {
        this.drawer.close();
    };

    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
