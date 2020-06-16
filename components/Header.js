import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'orangered',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
});
export default Header;