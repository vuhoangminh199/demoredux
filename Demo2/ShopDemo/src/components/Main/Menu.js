import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profileIcon from '../../media/temp/profile.jpg';
import global from '../global';
import saveToken from '../../api/saveToken';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user });
    }

    onSignOut() {
        this.setState({ user: null });
        saveToken('');
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDERHISTORY' });
    }

    render() {
        const { container, profile, button, btnText,
            btnSignInStyle, btnTextSignIn, loginContainer,
            textUserName } = styles;
        const logoutJSX = (
            <View style={{ flex: 1 }} >
                <TouchableOpacity style={button} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const { user } = this.state;

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={textUserName}>{user ? user : ''}</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                {mainJSX}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',

    },

    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30,
    },

    button: {
        height: 50,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },

    btnText: {
        color: '#34B089',
        fontSize: 20,
    },

    btnSignInStyle: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10

    },

    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15,

    },

    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textUserName: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir',
    },
});

export default Menu;
