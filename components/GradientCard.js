import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const gradientCard = props => {
    return (
        <LinearGradient 
            colors={['#FD6175', '#FD795F']}
            style={styles.headerGradient}
            start={[-0.1, 0.1]}
            >
            <View >
                <Text style={styles.cardTitle}>{props.title}</Text>
            </View>   
        </LinearGradient>     
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
    },
    cardTitle: {
        fontSize: 15,
        color: 'white',
    }
});


export default gradientCard;