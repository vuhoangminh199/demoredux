import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';
import HomeView from './HomeView';

class Home extends Component {

    render() {
        const { types, topProducts } = this.props;
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'HOMEVIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOMEVIEW': return <HomeView navigator={navigator} types={types} topProducts={topProducts} />;
                        case 'LISTPRODUCT': return <ListProduct navigator={navigator} category={route.category} />;
                        default: return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

export default Home;
