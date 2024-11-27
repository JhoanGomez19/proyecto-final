import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import DreamHouseScreen from '../screens/dreamHouseScreen';
import ProductDetailScreen from '../screens/productdetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="DreamHouseScreen" component={DreamHouseScreen} options={{ title: 'Categoría' }} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ title: 'Detalle del Producto' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
