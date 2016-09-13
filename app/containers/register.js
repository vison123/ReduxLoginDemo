/**
 * Created by vison on 16/9/1.
 */
import React from 'react';
import TabView from './tabView'
import LoginAction from '../actions/loginAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Alert,Button,Device } from 'mx-artifacts'
import Input from '../components/input'
import ReduxThunk from 'redux-thunk'
import Fetch from '../network/mockFetch'
import CommonAction from '../actions/commonAction'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';

class register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    _focusNextField(nextField) {
        this.refs[nextField].focus()
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 ,width: 200}}>

                    <TextInput
                        ref='1'
                        style={styles.input}
                        placeholder='Normal'
                        returnKeyType='go'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this._focusNextField('2')}
                    />
                    <TextInput
                        ref='2'
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder='Email Address'
                        returnKeyType='done'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this._focusNextField('3')}
                    />
                    <TextInput
                        ref='3'
                        style={styles.input}
                        keyboardType='url'
                        placeholder='URL'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this._focusNextField('4')}
                    />
                    <TextInput
                        ref='4'
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Numeric'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this._focusNextField('5')}
                    />
                    <TextInput
                        ref='5'
                        style={styles.input}
                        keyboardType='numbers-and-punctuation'
                        placeholder='Numbers & Punctuation'
                        returnKeyType='done'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:20
    }
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...LoginAction, ...CommonAction}, dispatch)
});

export default connect('', mapDispatchToProps)(register)
