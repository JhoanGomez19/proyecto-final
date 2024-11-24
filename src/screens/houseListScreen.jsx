import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from '../components/searchBar';  
import products from '../data/products.json';

const HousesListScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explora nuestras Casas</Text>
      <SearchBar search={search} setSearch={handleSearch} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productCategory}>Categoría: {item.category}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productContainer: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HousesListScreen;
