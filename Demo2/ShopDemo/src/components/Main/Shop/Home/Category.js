import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import brand1 from '../../../../media/brands/brand-asus.jpg';
import brand2 from '../../../../media/brands/brand-dell.jpg';
import brand3 from '../../../../media/brands/brand-hp.jpg';
import brand4 from '../../../../media/brands/brand-intel.jpg';
import brand5 from '../../../../media/brands/brand-kingmax.jpg';
import brand6 from '../../../../media/brands/brand-lenovo.jpg';
import brand7 from '../../../../media/brands/brand-logitech.jpg';
import brand8 from '../../../../media/brands/brand-samsung.jpg';
import brand9 from '../../../../media/brands/brand-sony.jpg';

const { width } = Dimensions.get('window');
const url = 'http://localhost/api/images/type/';
class Category extends Component {

    gotoListProduct(category) {
        const { navigator } = this.props;
        navigator.push({ name: 'LISTPRODUCT', category });
    }

    render() {
        const { types } = this.props;
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight}>
                {types.map(e => (
                    <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e.id}>
                        <Image source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                            <Text style={cateTitle}>{e.name}</Text>
                        </Image>
                    </TouchableOpacity>
                ))}
            </Swiper>
        );

        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    {types.length ? swiper : null}
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },

    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
    },

    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cateTitle: {
        fontSize: 15,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    },


});
export default Category;
