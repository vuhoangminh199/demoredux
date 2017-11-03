import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity, 
    ListView } from 'react-native';

const url = 'http://localhost/api/images/product/';

class TopProduct extends Component {

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
                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product => (
                        <TouchableOpacity style={productContainer} onPress={() => this.gotoDetail(product)}>
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
                            <Text style={productName} >{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
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
