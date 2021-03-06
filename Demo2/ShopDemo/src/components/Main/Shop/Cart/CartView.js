import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, StyleSheet, Image,
    ScrollView,
} from 'react-native';
import global from '../../../global';
import getToken from '../../../../api/getToken';

const url = 'http://localhost/api/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    incrQuantity(id) {
        global.incrQuantity(id);
    }

    decrQuantity(id, quantity) {
        if (quantity > 1) {
            global.decrQuantity(id);
        }
    }

    removeProduct(id) {
        global.removeProduct(id);
    }

    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    async gotoOrderCart() {
        const { navigator } = this.props;
        const arrayDetail = this.props.cartArray.map(e => ({
            id: e.product.id,
            quantity: e.quantity,
        }));
        const token = await getToken();
        if (token === null || token === '') {
            alert('Login in to Order');
        } else {
            navigator.push({ name: 'ORDERCART', arrayDetail });
        }
    }

    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        const cartArray = this.props.cartArray;
        const arrayTotal = cartArray.map(e => e.price * e.quantity);
        const total = arrayTotal.length ? arrayTotal.reduce((a, b) => a + b) : 0;
        return (
            <View style={wrapper}>
                <ScrollView>
                    {this.props.cartArray.map(e => {
                        return (
                            <View style={product}>
                                <Image source={{ uri: `${url}${e.image}` }} style={productImage} />
                                <View style={[mainRight]}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={txtName}>{toTitleCase(e.name)}</Text>
                                        <TouchableOpacity onPress={() => this.removeProduct(e.id)}>
                                            <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={txtPrice}>{e.price}$</Text>
                                    </View>
                                    <View style={productController}>
                                        <View style={numberOfProduct}>
                                            <TouchableOpacity onPress={() => this.incrQuantity(e.id)}>
                                                <Text>+</Text>
                                            </TouchableOpacity>
                                            <Text>{e.quantity}</Text>
                                            <TouchableOpacity onPress={() => this.decrQuantity(e.id, e.quantity)}>
                                                <Text>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(e)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>)
                    })
                    }
                </ScrollView>
                <TouchableOpacity style={checkoutButton} onPress={this.gotoOrderCart.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default CartView;
