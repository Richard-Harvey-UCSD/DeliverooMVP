/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        </Stack.Navigator>
      </TailwindProvider>
      <StatusBar barStyle='dark-content' />
    </NavigationContainer>
  );
}