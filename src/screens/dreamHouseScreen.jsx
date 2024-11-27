import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput } from 'react-native';

const DreamHouseScreen = ({ route }) => {
  const { category } = route.params;
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const imageMap = {
    casasmodernas: require('../../assets/casaModerna1.jpg'),
    casasdecampo: require('../../assets/casaColonial1.jpg'),
    casascoloniales: require('../../assets/casaDeCampo1.jpg'),
    casasdeplaya: require('../../assets/casasDePlaya.jpg'),
    casasminimalistas: require('../../assets/casasMinimalistas.jpeg'),
  };

  useEffect(() => {
    const loadImages = () => {
      const categoryName = category?.name?.toLowerCase()?.replace(/\s+/g, '') || '';
      const validImages = category?.images && Array.isArray(category.images)
        ? category.images.map((image, index) => ({
            ...image,
            url: imageMap[categoryName] || null,
            id: index,
          })).filter(item => item.url !== null)
        : [];
      setImages(validImages);
      setFilteredImages(validImages);
    };
    loadImages();
  }, [category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = images.filter((image) =>
      image.url?.toString().toLowerCase().includes(query.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  const renderImageItem = ({ item }) => (
    <View style={[styles.image, { backgroundColor: 'lightgray' }]}>
      <Image source={item.url} style={styles.imageContent} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category?.name || 'Categoría no disponible'}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar imágenes..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredImages}
        renderItem={renderImageItem}
        keyExtractor={(item) => `image-${item.id}`}
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  image: {
    width: '45%',
    height: 200,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default DreamHouseScreen;
