import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import global from '../../../components/global';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';
import getTopProduct from '../../../api/getTopProduct';
import getBrand from '../../../api/getBrand';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: [],
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.gotoSearch = this.gotoSearch.bind(this);
    }

    componentDidMount() {
        getTopProduct()
            .then(resJSON => {
                this.setState({ topProducts: resJSON });
            });
        getBrand()
            .then(resJSON => {
                this.setState({ types: resJSON });
            });
        getCart().then(cartArray => this.setState({ cartArray }));
    }

    gotoSearch() {
        this.setState({ selectedTab: 'search' });
    }

    addProductToCart(product) {
        const isExist = this.state.cartArray.some(e => e.id === product.id);
        if (isExist) return;
        product.quantity = 1;
        var tempCartArray = this.state.cartArray;
        tempCartArray.push(product)
        this.setState({ cartArray: tempCartArray },
            () => saveCart(this.state.cartArray));
    }

    incrQuantity(productId) {
        const tempArray = this.state.cartArray;
        tempArray.map((e,i)=>{
            if (e.id == productId) {
                e.quantity = e.quantity+1;            
            }
        })
        this.setState({ cartArray: tempArray },
            () => saveCart(this.state.cartArray));
    }

    decrQuantity(productId) {
        const tempArray = this.state.cartArray;
        tempArray.map((e,i)=>{
            if (e.id == productId) {
                e.quantity = e.quantity - 1;            
            }
        })
        this.setState({ cartArray: tempArray },
            () => saveCart(this.state.cartArray));
    }

    removeProduct(productId) {
        const newCart = this.state.cartArray.filter(e => e.id !== productId);
        this.setState({ cartArray: newCart },
            () => saveCart(this.state.cartArray));
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { iconStyles } = styles;
        const { types, selectedTab, topProducts, cartArray } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyles} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyles} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Home types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyles} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyles} />}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={iconStyles} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyles} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}

                    >
                        <Search />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyles: { width: 25, height: 25, }
});

export default Shop;
