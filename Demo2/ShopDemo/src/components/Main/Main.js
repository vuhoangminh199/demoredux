import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component {
    componentDidMount() {
        getToken()
            .then(token => checkLogin(token))
            .then(res => global.onSignIn(res.user))
            .catch(err => console.log(err));
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;//dung de k trung ten bien
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
