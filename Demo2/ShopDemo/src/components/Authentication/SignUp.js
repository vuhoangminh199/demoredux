import React, { Component } from 'react';
import { Alert, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import register from '../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        };
    }

    onSuccess() {
        // this.props.goToSignIn();

        Alert.alert(
            'Notice',
            'Sign Up  Successfully',
            [
                { text: 'OK', onPress: () => this.props.goToSignIn() },
            ],
            { cancelable: false }
        );
    }

    onFail(error) {
        Alert.alert(
            'Notice',
             error,
            [
                { text: 'OK', onPress: () => console.log('fail') },
            ],
            { cancelable: false }
        );
    }

    registerUser() {
        const { name, email, password } = this.state;
        if (name === '' || email === '' || password === '' || name === null || email === null || password === null ) {
            return this.onFail('Your Input is required');
        } else {
            register(email, name, password)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                return this.onFail('Email has been used by other user');
            });
        }
        
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Password"
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter Your password"
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
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
