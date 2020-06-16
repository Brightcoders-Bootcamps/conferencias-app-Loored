import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const gradientCard = props => {
    return (
        <View >
            <Text style={styles.cardTitle}>{props.title}</Text>
        </View>        
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        // backgroundColor: '#FD6175',
        //to #FD795F
    },
    cardTitle: {
        fontSize: 15,
        color: 'white',
    }
});


export default gradientCard;