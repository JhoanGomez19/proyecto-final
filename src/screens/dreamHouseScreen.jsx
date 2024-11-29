import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import productsData from '../data/products.json';
import { images } from '../data/image';

const DreamHouseScreen = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryMap = {
      "Casas Modernas": "Moderna",
      "Casas de Campo": "Campo",
      "Casas Coloniales": "Colonial",
      "Casas Minimalistas": "Minimalistas",
      "Casas de Playa": "Playa",
    };
    const loadProducts = () => {
      const normalizedCategoryName = categoryMap[category.name.trim()] || category.name.trim();
      const filteredProducts = productsData.filter(product =>
        product.name.toLowerCase().includes(normalizedCategoryName.toLowerCase())
      );
      setProducts(filteredProducts);
    };
    loadProducts();
  }, [category]);

  const handleBuyPress = (product) => {
    alert(`Compraste el producto: ${product.name}`);
  };

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productCard}>
        <Image source={images[item.image]} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => handleBuyPress(item)}
        >
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category?.name || 'Categoría no disponible'}</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
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
    textAlign: 'center',
    marginVertical: 20,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  productCard: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#ff7f50',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DreamHouseScreen;
