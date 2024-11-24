// src/components/UnsplashImages.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// Coloca tu Access Key aquí
const accessKey = '2tT8vw9ZVbEo2LlLdm7U7d124uiWKKYpRBiIUho47_0';
const placeholderImage = 'https://via.placeholder.com/150';

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Intento ${i + 1} de ${retries}...`);
      const response = await fetch(url);
      if (response.ok) {
        console.log('Solicitud exitosa');
        return await response.json();
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error en intento ${i + 1}:`, error.message);
      if (i < retries - 1) {
        console.warn(`Reintentando solicitud (${i + 1}/${retries})...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error('Error final después de los intentos:', error.message);
        throw error;
      }
    }
  }
};

const UnsplashImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Iniciando la carga de imágenes...');
        const data = await fetchWithRetry(
          `https://api.unsplash.com/photos?client_id=${accessKey}`
        );
        console.log('Imágenes cargadas correctamente:', data);
        setImages(data);
      } catch (error) {
        console.error('Error al obtener las imágenes:', error.message);
        alert('Error al obtener las imágenes: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.urls?.small || placeholderImage }}
              style={styles.image}
            />
            <Text>{item.alt_description || 'Imagen sin descripción'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default UnsplashImages;
