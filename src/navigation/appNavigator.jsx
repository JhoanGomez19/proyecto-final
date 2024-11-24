import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DreamHouseScreen from '../screens/dreamHouseScreen';
import HomeScreen from '../screens/homeScreen';
import ProductDetailScreen from '../screens/productdetailScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ category }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="DreamHouseScreen" 
        component={DreamHouseScreen} 
        options={{ title: category ? category : 'Seleccionar Categoría' }}
      />
      <Stack.Screen 
        name="ProductDetailScreen" 
        component={ProductDetailScreen} 
        options={{ headerShown: false }} // Ocultar el encabezado de la pantalla de detalle
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
