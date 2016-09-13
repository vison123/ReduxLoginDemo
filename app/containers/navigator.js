/**
 * Created by vison on 16/8/17.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginAction from '../actions/loginAction'
import Login from './login'
import TabView from './tabView'
import { Loading,Device } from 'mx-artifacts'

import {
    Navigator,
    StyleSheet,
    Text,
    View,
    NetInfo
} from 'react-native';

export default class navigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initComp : Login
        }
    }

    componentWillMount() {
        if (this.props.token !== ''){
            this.state.initComp = TabView;
        }
    }

    componentDidMount () {
        console.log('componentDidMount  connectionInfo');
        NetInfo.addEventListener(
            'change',
            this._handleConnectionInfoChange
        );
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                console.log('fetch'+  isConnected);
            }
        );
    }

    componentWillUnmount () {
        console.log('componentWillUnmount  connectionInfo');
        NetInfo.removeEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }

    _handleConnectionInfoChange (connectionInfo) {
        console.log('connectionInfo::' + connectionInfo);
        //const connectionInfoHistory = this.state.connectionInfoHistory.slice();
        //connectionInfoHistory.push(connectionInfo);
        //this.setState({
        //    connectionInfoHistory
        //});
    }



    render() {
        return (
            <View style={{ width: Device.width, height: Device.height }}>
                <Navigator
                    ref="navigator"
                    renderScene={this._renderScene}
                    configureScene={(route) => (
                {
                    ...route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump,
                    gestures: route.gestures
                })}
                    initialRoute={{
                    comp: this.state.initComp
                 }}
                />

                <Loading isVisible={this.props.showLoading} />
            </View>
        );
    }

    _renderScene = (route, navigator) => {
        let Comp = route.comp;
        return (
            <Comp
                param={route.param}
                navigator={navigator}
                callback={route.callBack}
            />
        );
    };
}

const mapStateToProps = (state) => {
    return {
        token: state.account.token,
        showLoading: state.common.showLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(...LoginAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navigator)
