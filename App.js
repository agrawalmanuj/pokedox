
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Details from './Details';
import Favourite from './Favourite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="PokeDex" component={Home} />
   <Stack.Screen name="Details" component={Details} />
   <Stack.Screen name="Favourite" component={Favourite} />
    
     </Stack.Navigator>
    </NavigationContainer>
  );
}


