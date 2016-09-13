/**
 * Created by vison on 16/8/17.
 */
import React, { Component } from 'react';
import Navigator from './navigator'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const store = configureStore();

export default class ReduxLoginDemo extends Component {

     render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}