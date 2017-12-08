import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';
import Swiper from 'react-native-swiper';
import banner1 from '../../../../media/banner/banner1.png';
import banner2 from '../../../../media/banner/banner2.png';
import banner3 from '../../../../media/banner/banner3.png';
import banner4 from '../../../../media/banner/banner4.png';
import banner5 from '../../../../media/banner/banner5.png';
const { width } = Dimensions.get('window');

class Collection extends Component {

    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>WHAT IS HOT?!</Text>
                </View>
                <TouchableOpacity style={{ flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight} autoplay="true">
                        <TouchableOpacity>
                            <Image source={banner1} style={imageStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={banner2} style={imageStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={banner3} style={imageStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={banner4} style={imageStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={banner5} style={imageStyle} />
                        </TouchableOpacity>
                    </Swiper>
                </TouchableOpacity>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
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
    }

});
export default Collection;