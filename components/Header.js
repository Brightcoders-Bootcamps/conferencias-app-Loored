import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';


const Header = props => {
    const [active, setActive] = useState(false);
    return (
        <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            <View style={styles.headerButtons}>
                <Button 
                    style={styles.buttonTitle} 
                    title="Upcoming"
                    onPress={() => setActive(true)} 
                    />
                <Button title="Completed"/>
                <Icon.Button
                    name="plus"
                    color= "grey"
                    backgroundColor= "white"
                    style={styles.Icon}
                    >
                </Icon.Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        // height: 90,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerTitle: {
        color: '#FC6879',
        fontSize: 18,
        margin: 40,
        marginBottom: 0
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    Icon: {

    }
});
export default Header;