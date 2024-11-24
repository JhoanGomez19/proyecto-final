import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import productos from '../data/products.json';  // Datos locales de productos

const DreamHouseScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  // Filtra los productos según la categoría seleccionada y la búsqueda
  const filteredProducts = productos
    .filter(product => product.categoryId === category.id)
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailScreen', { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category.name}</Text>
      <Text style={styles.categoryDescription}>{category.description}</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar productos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleProductPress(item)}>
            {/* Aquí mantenemos la conexión a la API para las imágenes de los productos */}
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
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
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    alignItems: 'center',
    flex: 0.45,
    margin: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DreamHouseScreen;
