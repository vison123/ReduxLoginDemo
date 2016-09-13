/**
 * Created by vison on 16/8/19.
 */
import React from 'react';
import { Device } from 'mx-artifacts'
import {
    TextInput,
    View,
    Image,
} from 'react-native';

export default class Input extends React.Component {

    static propTypes = {
        containerStyle: View.propTypes.style,
        iconStyle: View.propTypes.style,
        inputStyle: TextInput.propTypes.style,
        inputType: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        placeholderTextColor: React.PropTypes.string,
        maxLength: React.PropTypes.number,
        value: React.PropTypes.string,
        field: React.PropTypes.string.isRequired,
        onFocus: React.PropTypes.func,
        onLayout: React.PropTypes.func,
        icon: React.PropTypes.any,
        img: React.PropTypes.any,
        onChangeText: React.PropTypes.func,
        defaultValue: React.PropTypes.any,
        showImg: React.PropTypes.bool,
        textAlign: React.PropTypes.any
    };

    static defaultProps = {
        containerStyle: {
            height: 47,
            borderColor: '#b7c7dc',
            borderWidth: 1,
            marginTop: 12,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 6
        },
        iconStyle: {
            width: 16,
            height: 16,
            marginLeft: 9
        },
        inputStyle: {
            fontSize: 18,
            color: '#979fa2',
            marginLeft: 9,
            width: Device.width * (375 - 80) / 375
        },
        placeholder: '',
        placeholderTextColor: '#c7d2da',
        focusColor: '#ff0000',
        // value: ''
        inputType: 'default',
        showImg: true,
        textAlign: 'auto'
    };


    render() {
        return (
            <View style={this.props.containerStyle}>
                <TextInput
                    style={this.props.inputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.props.onChangeText(this.props.field, text)}
                    maxLength={this.props.maxLength}
                    defaultValue={this.props.defaultValue}
                    secureTextEntry={this.props.inputType === 'password'}
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    clearButtonMode="while-editing"
                    keyboardType={this.props.inputType}
                    onFocus={this.props.onFocus}
                    onLayout={this.props.onLayout}
                    textAlign={this.props.textAlign}
                />
            </View>
        );
    }
}
