import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import productsData from '../data/products.json';
import { images } from '../data/image';
import SearchBar from '../components/searchBar';

const DreamHouseScreen = ({ route, navigation}) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

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
      setFilteredProducts(filteredProducts); // Inicializar con todos los productos de la categoría
    };

    loadProducts();
  }, [category]);

  useEffect(() => {
    const searchProducts = () => {
      const searchQuery = search.toLowerCase();
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(results);
    };
    searchProducts();
  }, [search, products]);

  const handleMoreInfoPress = (product) => {
    navigation.navigate('HouseDetails', { house: product });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={images[item.image]} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => handleMoreInfoPress(item)}
      >
        <Text style={styles.infoButtonText}>Más Información</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar search={search} setSearch={setSearch} />
      <Text style={styles.title}>{category?.name || 'Categoría no disponible'}</Text>
      <FlatList
        data={filteredProducts}
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
  infoButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  infoButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DreamHouseScreen;
