import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import React from 'react';

const Stack = createStackNavigator();

import Home from './components/Home'
import Main from './components/Main'
import Question from './components/Question'

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='home' component={Home} /> */}
          <Stack.Screen name='main' component={Main} />
        </Stack.Navigator> 
      </NavigationContainer>
    </SafeAreaView>
  );
}