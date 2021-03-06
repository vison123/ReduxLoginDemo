/**
 * Created by vison on 16/8/19.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Im extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Im
                </Text>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
