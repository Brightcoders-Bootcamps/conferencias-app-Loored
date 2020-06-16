import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        fontSize: 15,
        // borderBottomWidth: 2,
        // borderBottomColor: '#FD795F',
        // marginRight: 10,
        margin: 25,
        padding: 15,
        
    },
    buttonText: {
        fontSize: 15,
        color: 'grey'
    }
});

export default Button;