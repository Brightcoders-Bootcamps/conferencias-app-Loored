import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientCard from '../components/GradientCard';

const StartScreenMeetings = props => {
    return (
        <View style={styles.screen}>
            <GradientCard title="Carta"/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    }
});


export default StartScreenMeetings;