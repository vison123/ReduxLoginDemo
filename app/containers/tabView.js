import React from 'react';
import LoginAction from '../actions/loginAction'
import CommonAction from '../actions/commonAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './tabs/home'
import Market from './tabs/market'
import Im from './tabs/im'
import Personal from './tabs/personal'
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

class TabView extends React.Component {

    constructor(props) {
        super(props);
    }

    setPage = (tab) => {
        this.props.actions.selectTab(tab);
    };

    render() {
        return (
            <TabBarIOS
                selectedTab={this.props.selectedTab}
                translucent={false}
                barTintColor='#f2f2f2'
            >
                <TabBarIOS.Item
                    title="首页"
                    icon={require('../images/home.png')}
                    selected={this.props.selectedTab === 'home'}
                    selectedIcon={require('../images/home-selected2.png')}
                    onPress={() => this.setPage('home')}
                >
                    <Home />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="市场"
                    icon={require('../images/market.png')}
                    selected={this.props.selectedTab === 'market'}
                    selectedIcon={require('../images/market-selected2.png')}
                    onPress={() => this.setPage('market')}
                >
                    <Market />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="聊天"
                    icon={require('../images/IM.png')}
                    selectedIcon={require('../images/IM-selected2.png')}
                    selected={this.props.selectedTab === 'im'}
                    onPress={() => this.setPage('im')}
                >
                    <Im />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="个人"
                    icon={require('../images/personalcenter.png')}
                    selected={this.props.selectedTab === 'personal'}
                    selectedIcon={require('../images/personalcenter-selected2.png')}
                    onPress={() => this.setPage('personal')}
                >
                    <Personal />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
});

const mapStateToProps = state => ({
    selectedTab: state.common.selectedTab
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...LoginAction, ...CommonAction}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TabView)
