import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
import global from '../../global';
import search from '../../../api/searchProduct';

const { height } = Dimensions.get('window');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
        };
    }

    onSearch() {
        const { txtSearch } = this.state;
        search(txtSearch)
            .then(arrProduct => global.setArraySearch(arrProduct))
            .catch(err => console.log(err));
        this.setState({ txtSearch: '' });
    }

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle, iconStyleLogo} = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Image source={icLogo} style={iconStyleLogo} />
                </View>

                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    value={this.state.txtSearch}
                    onFocus={() => global.gotoSearch()}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { height: height / 8, backgroundColor: '#34B089', padding: 10, justifyContent: 'space-around' },
    row1: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    textInput: { height: height / 25, backgroundColor: 'white', paddingLeft: 10, paddingVertical: 0 },
    iconStyle: { width: 25, height: 25 },
    iconStyleLogo: { width: 90 , height: 25 },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
});

export default Header;
