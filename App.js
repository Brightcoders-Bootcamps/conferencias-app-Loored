// import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen ({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button 
        title="Go to Conferences"
        onPress={() => navigation.navigate('Conferences')}
      />
      <Button 
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Profile'})}
      />
    </View>
  );
}

const Conferences = ( {navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Conferences</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button title="Go back first screen stack" onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

function Profile() {
  return (
    <View>
      <Button title="Clc"
        onPress={() => alert('hey there')}

      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions= {{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            title: 'Meetly',
          }}
        />
        
        <Stack.Screen name="Conferences" component={Conferences} />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={({route}) => ({title: route.params.name})} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;