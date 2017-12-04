import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from './CartView';
import OrderCart from './OderCart';

class Cart extends Component {

    render() {
        const { cartArray } = this.props;
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'CARTVIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CARTVIEW': return <CartView navigator={navigator} cartArray={cartArray} />;
                        case 'ORDERCART': return <OrderCart navigator={navigator} cartArray={cartArray} />;
                        default: return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

export default Cart;