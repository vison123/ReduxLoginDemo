import React from 'react';
import TabView from './tabView'
import Register from './register'
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

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    _onLoginPress = () => {
        this.props.actions.toLogin(this.state.userName, this.state.password)
            .then(()=> {
                this.props.navigator.push({comp: TabView})
            }, ()=> {
                Alert("登陆失败")
            })
    };

    _onRegisterPress = () => {
        this.props.navigator.push({comp: Register})
    };

    _renderTitle = () => {
        return (
            <View style={{flex:1,height: 47, width: 300,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"#000000",fontSize:20}}>
                    登陆
                </Text>
            </View>)
    };

    _onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>

                    {this._renderTitle()}

                    <Input
                        type="default" placeholder="userName" maxLength={11}
                        field="userName" onChangeText={this._onChangeText}
                        inputType="number-pad"
                    />

                    <Input
                        type="default" placeholder="password" maxLength={11}
                        field="password" onChangeText={this._onChangeText}
                        inputType="number-pad"
                    />

                    <Button
                        containerStyle={{ flex:1,marginTop: 20 }}
                        style={{ fontSize: 20, color: '#ffffff' }}
                        disabledBackgroundColor="#b3c7f5"
                        enabledBackgroundColor="#4b76df"
                        onPress={() => this._onLoginPress()}
                    >
                        登录
                    </Button>
                    <Button
                        containerStyle={{ flex:1,marginTop: 20 }}
                        style={{ fontSize: 20, color: '#ffffff' }}
                        disabledBackgroundColor="#b3c7f5"
                        enabledBackgroundColor="#4b76df"
                        onPress={() => this._onRegisterPress()}
                    >
                        注册
                    </Button>
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
    }

});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...LoginAction, ...CommonAction}, dispatch)
});

export default connect('', mapDispatchToProps)(Login)
