import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import ListScreen from './Screens/ListScreen';
import DetailScreen from './Screens/DetailScreen';
import Splash from './Components/Splash';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        {/* Adding Splash Screen and initialize to collect data */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
