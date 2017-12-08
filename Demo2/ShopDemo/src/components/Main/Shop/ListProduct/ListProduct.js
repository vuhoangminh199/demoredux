import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import icBackList from '../../../../media/appIcon/backList.png';
import getProductOfType from '../../../../api/getProductOfType';

const url = 'http://localhost/api/images/product/';
const {width,height} = Dimensions.get('window');
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class ListProduct extends Component {
    constructor(props) {
        super(props);

        this.arr = [];
    }

    componentDidMount() {
        const idType = this.props.category.id;
        getProductOfType(idType)
            .then(arrProduct => {
                this.arr = JSON.parse(arrProduct);
                this.setState({arr: JSON.parse(arrProduct)});
            })
            .catch(err => console.log(err));

    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    goToDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCTDETAIL', product });
    }

    render() {
        const { container, header, wrapper,
            backStyle, titleStyle, productContainer,
            productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial,
            txtColor, txtShowDetail, viewMaterial,
            flatliststyle } = styles;
        const { category } = this.props;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={icBackList} style={backStyle} />
                        </TouchableOpacity>

                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <FlatList
                        style = {flatliststyle}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        data={this.arr}
                        renderItem={({ item, index }) =>
                        <View style={productContainer}>
                                <Image source={{ uri: `${url}${item.images}` }} style={productImage} />
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(item.name)}</Text>
                                    <Text style={txtPrice}>{item.price}$</Text>
                                    <Text style={txtMaterial}>Stock: {item.stock}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>Gift {item.gift}</Text>
                                        <View />
                                        <TouchableOpacity onPress={() => this.goToDetail(item)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    flatliststyle: {
        width:width-40,height:height-180,paddingRight:10,
    },

    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        color: '#B10D65',
        fontFamily: 'Avenir',
        fontSize: 20,
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1,
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1

    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400',
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11,
    },
});

export default ListProduct;
