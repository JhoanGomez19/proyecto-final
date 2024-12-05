import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/homeScreen';
import DreamHouseScreen from '../screens/dreamHouseScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Iniciar Sesión', headerShown: false }} 
      />
      <Stack.Screen   
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }} 
      />
      <Stack.Screen 
        name="DreamHouseScreen" 
        component={DreamHouseScreen} 
        options={{ title: 'Categoría' }} 
      />
      <Stack.Screen 
        name="HouseDetails" 
        component={HouseDetailsScreen} 
        options={{ title: 'Detalles de la Casa' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
