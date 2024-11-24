import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
import productsData from '../data/products.json';

const ProductDetailScreen = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      setProducts(productsData);
      setFilteredProducts(productsData);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar los productos.');
      console.error('Error al cargar productos:', error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailScreen', { product });
  };

  const handleBuyPress = (product) => {
    Alert.alert('Compra realizada', `Has comprado: ${product.name}`);
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => handleBuyPress(item)}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => handleProductPress(item)}
      >
        <Text style={styles.detailsButtonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar productos..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
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
  flatListContent: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#ff7f50',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#ff7f50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
