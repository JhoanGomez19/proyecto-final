import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import categorias from '../data/categories.json';  // Datos locales de categorías

const HomeScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('DreamHouseScreen', { category });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item)}>
      {/* Aquí mantenemos la conexión a la API para las imágenes */}
      <Image source={{ uri: `https://via.placeholder.com/150` }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige una Categoría</Text>
      <FlatList
        data={categorias}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
