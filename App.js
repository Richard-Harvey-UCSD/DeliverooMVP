/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';

import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text className='text-red-500 p-10'>Open</Text>
        <StatusBar style='auto' />
      </View>
    </TailwindProvider>
  );
}