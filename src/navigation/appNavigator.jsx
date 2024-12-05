import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import DreamHouseScreen from '../screens/dreamHouseScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="DreamHouseScreen" component={DreamHouseScreen} options={{ title: 'Categoría' }} />
      <Stack.Screen name="HouseDetails" component={HouseDetailsScreen} options={{ title: 'Detalles de la Casa' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
