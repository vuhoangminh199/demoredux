import React, { Component } from 'react';
import { Alert, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
        };
    }

    onFail(error) {
        alert(error);
    }

    onSignIn() {
        const { email, password } = this.state;
        if (email === '' || password === '' || email === null || password === null){
            this.onFail('Email or Password is required')
        } else {
            signIn(email, password)
            .then(res => {
                if(res.user === null){
                    return this.onFail('Email or Password is incorrect');
                } else {
                    global.onSignIn(res.user);
                    this.props.goBack();
                    saveToken(res.user);
                }
            })
            .catch(err => console.log(err));
        } 
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ email: text.split("@gmail.com")  })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
    },

    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
