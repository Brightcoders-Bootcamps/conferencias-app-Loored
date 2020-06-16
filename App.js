import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Header from './components/Header';
import StartScreenMeetings from './screens/ScreenMeetings';

export default function App() {
  return (
    <View style={styles.screen}>      
      <Header title="Meetly"/>
      <StartScreenMeetings />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
