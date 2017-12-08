import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions,
    FlatList,
    TouchableOpacity, 
    ListView } from 'react-native';

const url = 'http://192.168.1.100:1996/api/GetProductImage/';

class TopProduct extends Component {
    FlatListItemSeparator = () => {
        return (
        <View
            style={{
            height: 1,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            }}
        />
        );
    }
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCTDETAIL', product });
    }

    render() {
        const { container, title, titleContainer, body,
            productContainer, productImage, productName,
            productPrice } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <FlatList
                        keyExtractor={item => item.id}
                        numColumns={2}
                        style = {body}
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        data={topProducts}
                        renderItem={({item,index}) =>
                            <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(item)}>
                                <Image source={{ uri: `${url}${item.image}` }} style={productImage} />
                                <Text style={productName} >{item.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        }
                    />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },

    title: {
        color: '#D3D3CF',
        fontSize: 20,
    },

    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },

    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,

    },

    productImage: {
        width: productWidth,
        height: productHeight,
    },

    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
        marginVertical: 5,
    },

    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
        marginVertical: 5,
    }

});

export default TopProduct;
