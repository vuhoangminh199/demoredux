import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    goToSignIn() {
        this.setState({ isSignIn: true });
    }

    render() {
        const { row1, iconStyle, titleStyle,
            container, controlStyle, signInStyle,
            signUpStyle, inActiveStyle, activeStyle } = styles;

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? <SignIn goBack={this.goBack.bind(this)} /> : <SignUp goToSignIn={this.goToSignIn.bind(this)} />;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inActiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inActiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    iconStyle: {
        width: 30,
        height: 30
    },

    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 30
    },

    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
    },

    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
    },

    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1.5,
    },

    signUpStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        marginLeft: 1.5,
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },

    inActiveStyle: {
        color: '#D7D7D7'
    },

    activeStyle: {
        color: '#3EBA77'
    },
});
