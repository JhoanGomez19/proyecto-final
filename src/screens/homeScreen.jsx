import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const categoriesData = [
  { id: 1, name: 'Casas Modernas' },
  { id: 2, name: 'Casas de Campo' },
  { id: 3, name: 'Casas Coloniales' },
  { id: 4, name: 'Casas de Playa' },
  { id: 5, name: 'Casas Minimalistas' },
];

const categoryImages = {
  casasmodernas: [
    require('../../assets/casaModerna1.jpg'),
    require('../../assets/casaModerna2.jpeg'),
    require('../../assets/casaModerna3.jpeg'),
  ],
  casasdecampo: [
    require('../../assets/casaDeCampo1.jpg'),
    require('../../assets/casaDeCampo2.jpg'),
    require('../../assets/casaDeCampo3.jpg'),
  ],
  casascoloniales: [
    require('../../assets/casaColonial1.jpg'),
    require('../../assets/casaColonial2.jpg'),
    require('../../assets/casaColonial3.jpg'),
  ],
  casasdeplaya: [
    require('../../assets/casasDePlaya.jpg'),
    require('../../assets/casasDePlaya2.jpeg'),
    require('../../assets/casasDePlaya3.jpg'),
  ],
  casasminimalistas: [
    require('../../assets/casasMinimalistas.jpeg'),
    require('../../assets/casasMinimalistas2.jpg'),
    require('../../assets/casasMinimalistas3.jpg'),
  ],
};

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  const loadCategoriesWithImages = () => {
    const categoriesWithImages = categoriesData.map((category) => {
      const categoryName = category.name.toLowerCase().replace(/\s+/g, '');
      const images = categoryImages[categoryName] || [];
      return { ...category, images };
    });
    setCategories(categoriesWithImages);
  };

  useEffect(() => {
    loadCategoriesWithImages();
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('DreamHouseScreen', { category });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item)}>
      <Image source={item.images[0]} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explora Casas por Estilo</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
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
