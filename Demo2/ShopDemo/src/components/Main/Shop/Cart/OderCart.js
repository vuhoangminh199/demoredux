import React, { Component } from 'react';
import { Alert, View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import sendOrder from '../../../../api/sendOrder';
import getToken from '../../../../api/getToken';
import icBack from '../../../../media/appIcon/back_white.png';

export default class OrderCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phonenumber: '',
        };
    }

    // onSuccess() {
    //     // this.props.goToSignIn();

    //     Alert.alert(
    //         'Notice',
    //         'Sign Up  Successfully',
    //         [
    //             { text: 'OK', onPress: () => this.props.goToSignIn() },
    //         ],
    //         { cancelable: false }
    //     );
    // }

    // onFail(error) {
    //     Alert.alert(
    //         'Notice',
    //         error,
    //         [
    //             { text: 'OK', onPress: () => console.log('fail') },
    //         ],
    //         { cancelable: false }
    //     );
    // }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    async onSendOrder() {
        const { cartArray } = this.props;
        const { name, address, phonenumber } = this.state;
        const token = await getToken();
        if (token === null || token === '') {
            alert('Login in to Order');
        } else {
            if (name === '' || phonenumber === '' || address === '' || name === null || phonenumber === null || address === null) {
                alert('Your Input is required');
            } else {
                await sendOrder(token, this.props);
                this.props.cartArray.map(e => {
                    this.removeProduct(e.product.id);
                });
                alert('Your Checkout Is Successful!');
            }

        }
    }

    render() {
        const { inputStyle, bigButton, buttonText, container, row1, iconStyle } = styles;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter Your Name"
                        value={this.state.name}
                        onChangeText={text => this.setState({ name: text })}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter Your Address"
                        value={this.state.address}
                        onChangeText={text => this.setState({ address: text })}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter Your PhoneNumber"
                        value={this.state.phonenumber}
                        onChangeText={text => this.setState({ phonenumber: text })}
                        secureTextEntry
                    />
                    <TouchableOpacity style={bigButton} onPress={this.onSendOrder.bind(this)}>
                        <Text style={buttonText}>ORDER CART</Text>
                    </TouchableOpacity>
                </View>
                <View />
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

    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
    },

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
