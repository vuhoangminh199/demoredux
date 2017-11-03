import React, { Component } from 'react';
import { Navigator } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView';

class Search extends Component {

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'SEARCHVIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCHVIEW': return <SearchView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

export default Search;